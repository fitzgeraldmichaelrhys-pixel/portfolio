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
        Executive, PayPal as a Business Development Representative, and earlier lead
        generation leadership at IDG Direct.
      </p>
      <p className={styles.bio}>
        Client work is the main job. Alongside it I ship software in TypeScript, React,
        Node.js, Python, and FastAPI, and I am studying Computer Science. AuditPack is a
        live SaaS; Mimir is a self-hosted GPU workspace. I want account manager and
        account executive roles in fintech and B2B SaaS, including teams that like a
        commercial person who can also build.
      </p>
      <div className={styles.metaBlock}>
        <p className={styles.meta}>{SITE.education}</p>
        <p className={styles.meta}>{SITE.school}</p>
      </div>
    </section>
  )
}
