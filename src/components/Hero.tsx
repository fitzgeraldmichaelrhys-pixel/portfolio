import { HIGHLIGHTS, SITE } from '../content/site'
import { CV_DOWNLOAD } from '../content/cv'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.kicker}>
          {SITE.location} · Fintech + software
        </p>
        <h1 id="hero-heading" className={styles.name}>
          {SITE.name}
        </h1>
        <p className={styles.headline}>{SITE.title}</p>
        <p className={styles.oneLiner}>{SITE.oneLiner}</p>

        <div className={styles.tracks}>
          <span className={`${styles.track} ${styles.trackCommercial}`}>
            Account management
          </span>
          <span className={styles.trackDivider} aria-hidden="true">
            /
          </span>
          <span className={`${styles.track} ${styles.trackDev}`}>
            Software development
          </span>
        </div>

        <p className={styles.craft}>
          Shipped{' '}
          <a href="#work">AuditPack</a> live · TypeScript, React, Node, Stripe
        </p>

        <div className={styles.ctaGroup}>
          <a className={styles.ctaPrimary} href="#work">
            See AuditPack
          </a>
          <a
            className={styles.ctaSecondary}
            href={CV_DOWNLOAD.href}
            download={CV_DOWNLOAD.filename}
          >
            Download CV
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
