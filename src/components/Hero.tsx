import { HIGHLIGHTS, SITE } from '../content/site'
import { CV_DOWNLOAD } from '../content/cv'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>{SITE.location} · Fintech background</p>
        <h1 id="hero-heading" className={styles.name}>
          {SITE.name}
        </h1>
        <p className={styles.headline}>{SITE.title}</p>
        <p className={styles.oneLiner}>{SITE.oneLiner}</p>

        <div className={styles.tracks}>
          <span className={styles.track}>Account management</span>
          <span className={styles.trackDivider} aria-hidden="true">
            /
          </span>
          <span className={styles.track}>Software development</span>
        </div>

        <div className={styles.ctaGroup}>
          <a
            className={styles.ctaPrimary}
            href={CV_DOWNLOAD.href}
            download={CV_DOWNLOAD.filename}
          >
            Download CV
          </a>
          <a className={styles.ctaSecondary} href="#tracks">
            See both skill sets
          </a>
          <a className={styles.ctaSecondary} href="#contact">
            Contact
          </a>
        </div>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item) => (
            <li key={item.label} className={styles.highlight}>
              <span className={styles.highlightValue}>{item.value}</span>
              <span className={styles.highlightLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
