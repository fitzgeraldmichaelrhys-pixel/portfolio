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
                <dd>
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                  &middot;{' '}
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
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
