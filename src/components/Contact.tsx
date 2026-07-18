import { SITE } from '../content/site'
import { CV_DOWNLOAD } from '../content/cv'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={styles.contact} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.title}>
        Contact
      </h2>
      <p className={styles.availability}>{SITE.availability}</p>

      <div className={styles.actions}>
        <a className={styles.primaryCta} href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        <a className={styles.link} href={SITE.phoneHref}>
          {SITE.phone}
        </a>
        <a
          className={styles.link}
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className={styles.link}
          href={CV_DOWNLOAD.href}
          download={CV_DOWNLOAD.filename}
        >
          Download CV (PDF)
        </a>
      </div>
    </section>
  )
}
