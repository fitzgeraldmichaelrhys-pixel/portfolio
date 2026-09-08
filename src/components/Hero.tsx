import { SITE } from '../content/site'
import { CV_DOWNLOAD } from '../content/cv'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header id="top" className={styles.plate} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <span className={styles.watermark} aria-hidden="true">
          MF
        </span>

        <nav className={styles.masthead} aria-label="Site masthead">
          <a href="#top" className={styles.nameLink}>{SITE.name}</a>
          <span className={styles.mastheadMeta}>Portfolio &mdash; 2026</span>
        </nav>

        <div className={styles.gridCols}>
          <div className={styles.colMain}>
            <p className={styles.roleEyebrow}>Account Manager &middot; Fintech &amp; B2B</p>
            <h1 id="hero-heading" className={styles.headline}>
              I run fintech accounts by day.
              <br />
              <span className={styles.altLine}>I write software after hours.</span>
            </h1>
            <p className={styles.lede}>{SITE.oneLiner}</p>

            <nav className={styles.actions} aria-label="Primary actions">
              <a className={styles.linkAction} href="#experience">See experience</a>
              <a className={styles.linkAction} href="#projects">Projects</a>
              <a
                className={styles.linkAction}
                href={CV_DOWNLOAD.href}
                download={CV_DOWNLOAD.filename}
              >
                CV (PDF) &darr;
              </a>
            </nav>
          </div>

          <aside className={styles.colFacts} aria-label="Contact facts">
            <dl className={styles.factPanel}>
              <div>
                <dt>Status</dt>
                <dd>
                  <span className={styles.liveDot} aria-hidden="true" />
                  Open for Q4 2026 &mdash; fintech and B2B SaaS roles
                </dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </dd>
              </div>

              <div>
                <dt>Profiles</dt>
                <dd className={styles.profileRow}>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    LinkedIn
                  </a>{' '}
                  &middot;{' '}
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6.01 0c2.29-1.56 3.3-1.24 3.3-1.24.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3z" />
                    </svg>
                    GitHub
                  </a>
                </dd>
              </div>

              <div>
                <dt>Based in</dt>
                <dd>{SITE.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>

      <div className={styles.strip} aria-hidden="true">
        <span>Revolut &middot; PayPal &middot; IDG Direct</span>
        <span>Fintech &amp; B2B SaaS — Galway, EU/US overlap, remote OK</span>
      </div>
    </header>
  )
}
