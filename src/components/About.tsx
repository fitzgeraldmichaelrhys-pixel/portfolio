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
        I live in {SITE.location} and sell fintech — that&apos;s been my whole working
        life so far: accounts at Revolut, two years on outbound at PayPal, and before
        all of it, a lead generation team of my own at IDG Direct.
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
