#!/usr/bin/env bash
# Pull the pre-built site branch from GitHub into the nginx web root.
# Run ON the Lightsail server (as ubuntu).
#
# One-time (if /var/www/portfolio is empty / not a git clone):
#   sudo mkdir -p /var/www/portfolio
#   sudo chown ubuntu:ubuntu /var/www/portfolio
#   git clone -b site --single-branch \
#     https://github.com/fitzgeraldmichaelrhys-pixel/portfolio.git \
#     /var/www/portfolio
#
# Updates after that:
#   ~/portfolio/deploy/pull-site.sh
#   (or copy this script somewhere and run it)
set -euo pipefail

WEB_ROOT="${PORTFOLIO_WEB_ROOT:-/var/www/portfolio}"
REPO_URL="${PORTFOLIO_REPO_URL:-https://github.com/fitzgeraldmichaelrhys-pixel/portfolio.git}"
BRANCH="${PORTFOLIO_SITE_BRANCH:-site}"

if [[ ! -d "${WEB_ROOT}/.git" ]]; then
  echo "No git repo in ${WEB_ROOT} — cloning ${BRANCH} branch..."
  sudo mkdir -p "${WEB_ROOT}"
  sudo chown "$(whoami):$(whoami)" "${WEB_ROOT}"
  # Clone into a temp dir then move if web root has leftover files
  TMP="$(mktemp -d)"
  git clone -b "${BRANCH}" --single-branch "${REPO_URL}" "${TMP}/site"
  rsync -a --delete "${TMP}/site/" "${WEB_ROOT}/"
  rm -rf "${TMP}"
  echo "Done. Site cloned to ${WEB_ROOT}"
  exit 0
fi

echo "Updating ${WEB_ROOT} from origin/${BRANCH}..."
cd "${WEB_ROOT}"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git reset --hard "origin/${BRANCH}"
echo "Done."
