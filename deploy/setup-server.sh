#!/usr/bin/env bash
# Idempotent one-time setup for Ubuntu Lightsail portfolio host (2 GB RAM).
# Run ON the server after copying this script and nginx-portfolio.conf.
#
# Usage:
#   scp deploy/setup-server.sh deploy/nginx-portfolio.conf ubuntu@YOUR_STATIC_IP:~/
#   ssh ubuntu@YOUR_STATIC_IP
#   nano ~/nginx-portfolio.conf    # set YOUR_DOMAIN
#   chmod +x ~/setup-server.sh
#   NGINX_CONF_SRC=~/nginx-portfolio.conf ~/setup-server.sh
set -euo pipefail

WEB_ROOT="/var/www/portfolio"
NGINX_SITE="portfolio"
SWAPFILE="/swapfile"
SWAP_SIZE_GB=1

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NGINX_CONF_SRC="${NGINX_CONF_SRC:-${SCRIPT_DIR}/nginx-portfolio.conf}"

if [[ ! -f "${NGINX_CONF_SRC}" ]]; then
  echo "Missing nginx config: ${NGINX_CONF_SRC}" >&2
  echo "Set NGINX_CONF_SRC to the path of nginx-portfolio.conf" >&2
  exit 1
fi

if grep -q 'YOUR_DOMAIN' "${NGINX_CONF_SRC}"; then
  echo "Warning: nginx config still contains YOUR_DOMAIN — replace before going live." >&2
fi

echo "==> apt update"
sudo apt update

echo "==> nginx"
if ! command -v nginx >/dev/null 2>&1; then
  sudo apt install -y nginx
fi
sudo systemctl enable nginx

echo "==> web root ${WEB_ROOT}"
sudo mkdir -p "${WEB_ROOT}"
if id ubuntu >/dev/null 2>&1; then
  sudo chown -R ubuntu:ubuntu "${WEB_ROOT}"
fi

echo "==> swap (${SWAP_SIZE_GB}G) if missing"
if ! swapon --show 2>/dev/null | grep -q "${SWAPFILE}"; then
  if [[ ! -f "${SWAPFILE}" ]]; then
    if ! sudo fallocate -l "${SWAP_SIZE_GB}G" "${SWAPFILE}" 2>/dev/null; then
      sudo dd if=/dev/zero of="${SWAPFILE}" bs=1M count="$((SWAP_SIZE_GB * 1024))" status=progress
    fi
    sudo chmod 600 "${SWAPFILE}"
    sudo mkswap "${SWAPFILE}"
  fi
  sudo swapon "${SWAPFILE}"
fi
if [[ -f "${SWAPFILE}" ]] && ! grep -qF "${SWAPFILE}" /etc/fstab; then
  echo "${SWAPFILE} none swap sw 0 0" | sudo tee -a /etc/fstab >/dev/null
fi

echo "==> nginx site ${NGINX_SITE}"
sudo cp "${NGINX_CONF_SRC}" "/etc/nginx/sites-available/${NGINX_SITE}"
sudo ln -sf "/etc/nginx/sites-available/${NGINX_SITE}" "/etc/nginx/sites-enabled/${NGINX_SITE}"
sudo rm -f /etc/nginx/sites-enabled/default

echo "==> test and reload nginx"
sudo nginx -t
sudo systemctl reload nginx

echo "Done. Deploy dist/ to ${WEB_ROOT}, then run certbot for YOUR_DOMAIN."
