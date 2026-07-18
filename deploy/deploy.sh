#!/usr/bin/env bash
# Deploy static dist/ to a Lightsail Ubuntu host over SSH.
# Usage:
#   export PORTFOLIO_HOST=ubuntu@YOUR_STATIC_IP
#   ./deploy/deploy.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${PORTFOLIO_HOST:?Set PORTFOLIO_HOST=ubuntu@YOUR_STATIC_IP}"
REMOTE_DIR="${PORTFOLIO_REMOTE_DIR:-/var/www/portfolio}"

cd "$ROOT"
npm run build

echo "Syncing dist/ → ${HOST}:${REMOTE_DIR}"
rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=accept-new" \
  "$ROOT/dist/" \
  "${HOST}:${REMOTE_DIR}/"

echo "Done. Visit http://${HOST#*@} (then HTTPS after certbot)."
