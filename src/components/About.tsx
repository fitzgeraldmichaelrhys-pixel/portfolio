import { SITE } from '../content/site'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <p className={styles.eyebrow}>Profile</p>
      <h2 id="about-heading" className={styles.title}>
        About
      </h2>
      <p className={styles.bio}>
        I&apos;m based in {SITE.location}. My career so far is rooted in{' '}
        <strong>fintech and B2B commercial work</strong> — Revolut as a Junior Account
        Executive and PayPal as a BDR — plus earlier lead-generation leadership at IDG
        Direct.
      </p>
      <p className={styles.bio}>
        In parallel I&apos;m building a <strong>developer skill set</strong> (C, Python,
        TypeScript, web) and studying Computer Science. I&apos;m looking for roles where
        either track matters — junior engineering, account management, or fintech teams
        that value both.
      </p>
      <p className={styles.meta}>{SITE.education}</p>
    </section>
  )
}
