import { EXPERIENCE } from '../content/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.rail}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Career</p>
          <h2 id="experience-heading" className={styles.title}>
            Experience
          </h2>
          <p className={styles.lede}>
            Five years in business development and account management at fintech
            and B2B companies: Revolut, PayPal, and IDG Direct.
          </p>
        </header>

        <ol className={styles.timeline}>
          {EXPERIENCE.map((entry) => (
            <li key={`${entry.company}-${entry.role}`} className={styles.entry}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.entryBody}>
                <div className={styles.entryHead}>
                  <h3 className={styles.company}>{entry.company}</h3>
                  <time className={styles.period}>{entry.period}</time>
                </div>
                <p className={styles.role}>
                  {entry.role}
                  <span className={styles.place}> · {entry.place}</span>
                </p>
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
