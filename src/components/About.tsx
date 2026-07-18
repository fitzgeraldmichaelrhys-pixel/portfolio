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
        I&apos;m based in {SITE.location}. Most of my working life so far has been{' '}
        <strong>fintech and B2B commercial work</strong>: Revolut as a Junior Account
        Executive, PayPal as a BDR, and earlier lead-generation leadership at IDG Direct.
      </p>
      <p className={styles.bio}>
        Alongside that I&apos;m building a <strong>developer skill set</strong> in C,
        Python, TypeScript, and web stacks, and studying Computer Science. AuditPack is
        the clearest proof: a live product with auth, payments, and real exports, not a
        tutorial clone. I want roles where either track matters, or where a fintech team
        wants both.
      </p>
      <div className={styles.metaBlock}>
        <p className={styles.meta}>{SITE.education}</p>
        <p className={styles.meta}>{SITE.school}</p>
      </div>
    </section>
  )
}
