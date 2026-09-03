import { EDUCATION } from '../content/experience'
import styles from './Education.module.css'

export function Education() {
  return (
    <section className={styles.section} aria-labelledby="education-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Background</p>
        <h2 id="education-heading" className={styles.title}>
          Education
        </h2>
        <p className={styles.lede}>
          Computer Science degree in progress, built on a secondary education in
          Limerick.
        </p>
      </header>

      <ol className={styles.list}>
        {EDUCATION.map((entry) => (
          <li key={entry.school} className={styles.entry}>
            <div className={styles.entryHead}>
              <h3 className={styles.school}>{entry.school}</h3>
              <time className={styles.period}>{entry.period}</time>
            </div>
            <p className={styles.credential}>
              {entry.credential}
              <span className={styles.place}> · {entry.place}</span>
            </p>
            <p className={styles.detail}>{entry.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
