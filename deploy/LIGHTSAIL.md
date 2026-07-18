# Lightsail deploy — Michael's portfolio host

Static React/Vite site served by **nginx only**. The server never runs Node/npm for builds.

## Instance (actual)

| Item | Value |
|------|--------|
| Plan | **$12/mo** General purpose **dual-stack** |
| RAM | **2 GB** |
| vCPUs | **2** |
| Disk | **60 GB SSD** |
| Transfer | **3 TB/mo** included |
| OS | Ubuntu (Lightsail blueprint) |

**Estimated monthly cost:** **~$12** for the instance (static IP is free while attached). Add your domain registrar (~$10–15/yr). Certbot TLS is free. No CDN or object storage required for this site.

### Why not build on the server?

`npm run build` (TypeScript + Vite) can spike well above **2 GB RAM** and get OOM-killed. Build on your Windows machine (or CI), then upload **`dist/`** only via `rsync` or `scp`.

---

## One-time Lightsail setup

1. Create the **$12/mo** General purpose dual-stack instance (2 GB / 2 vCPU / 60 GB).
2. Attach a **static IP** in the Lightsail console (keep it attached so the address stays stable).
3. **Networking → Firewall:** allow **22** (SSH), **80** (HTTP), **443** (HTTPS). Deny everything else unless you have a reason.
4. Copy setup files to the instance (from this repo on your PC):

```powershell
# PowerShell — replace YOUR_STATIC_IP with the Lightsail static IP from the console
scp deploy/setup-server.sh deploy/nginx-portfolio.conf ubuntu@YOUR_STATIC_IP:~/
```

5. SSH in and run the idempotent setup script:

```bash
ssh ubuntu@YOUR_STATIC_IP

# Edit domain placeholders before enabling the site (or edit on PC and re-scp)
nano ~/nginx-portfolio.conf   # replace YOUR_DOMAIN with your real domain

chmod +x ~/setup-server.sh
NGINX_CONF_SRC=~/nginx-portfolio.conf ~/setup-server.sh
```

The script installs nginx, creates `/var/www/portfolio`, adds a **1 GB swapfile** if none exists, and enables the site config.

6. **DNS** at your registrar (after static IP is attached):

| Name | Type | Value |
|------|------|--------|
| `@` | A | Lightsail static IP |
| `www` | CNAME | your apex domain |

7. **TLS** (after DNS propagates):

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d YOUR_DOMAIN -d www.YOUR_DOMAIN
```

Certbot adds HTTPS redirects; renewals are automatic via systemd timer.

### Optional: 2 GB swap

If `apt upgrade` or certbot ever feels tight on RAM, add a second gig (only if you are not already using a 2 GB swapfile):

```bash
sudo fallocate -l 2G /swapfile2
sudo chmod 600 /swapfile2
sudo mkswap /swapfile2
sudo swapon /swapfile2
echo '/swapfile2 none swap sw 0 0' | sudo tee -a /etc/fstab
```

One **1 GB** swap from `setup-server.sh` is enough for normal nginx + certbot use.

---

## Memory tips (2 GB host)

- **Never** run `npm install` or `npm run build` on the server.
- Keep the box as **nginx + static files**; no PM2, Docker, or Node services for this site.
- After setup, you can remove the repo clone from the server if you only copied `dist/` — nginx does not need source code.
- Check memory: `free -h` and `swapon --show`.
- If SSH feels sluggish during `apt upgrade`, swap prevents hard lockups; wait for it to finish rather than rebooting mid-upgrade.

---

## Deploy (build locally, sync `dist/` only)

### Git Bash / WSL / macOS

```bash
export PORTFOLIO_HOST=ubuntu@YOUR_STATIC_IP
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

`deploy.sh` runs `npm run build` locally, then `rsync --delete` to `/var/www/portfolio/`.

### Windows PowerShell

```powershell
cd C:\Users\batma\OneDrive\Desktop\portfolio
npm run build
scp -r dist/* ubuntu@YOUR_STATIC_IP:/var/www/portfolio/
```

For incremental uploads with delete semantics, use WSL/Git Bash and `deploy.sh`, or install rsync for Windows.

### Verify

```bash
curl -I https://YOUR_DOMAIN
```

---

## Files in `deploy/`

| File | Purpose |
|------|---------|
| [`setup-server.sh`](setup-server.sh) | One-time idempotent Ubuntu setup (nginx, dirs, swap, enable site) |
| [`nginx-portfolio.conf`](nginx-portfolio.conf) | Static SPA + caching, gzip, security headers |
| [`deploy.sh`](deploy.sh) | Local build + rsync to `PORTFOLIO_HOST` |

Replace **`YOUR_DOMAIN`** in the nginx config and certbot commands. Set **`PORTFOLIO_HOST=ubuntu@YOUR_STATIC_IP`** (or your SSH user/host) when deploying — do not commit real IPs to the repo.

---

## Contact locked from CV

- Email: Mikeyfitz2021@gmail.com
- Phone: +353 89 966 5732
- LinkedIn: https://www.linkedin.com/in/michael-fitzgerald-42abab206/
- Location: Limerick, Ireland

Edit `src/content/site.ts` if any of these change.
