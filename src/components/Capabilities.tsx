import { SKILLS } from '../content/site'
import styles from './Capabilities.module.css'

export function Capabilities() {
  return (
    <section className={styles.capabilities} aria-labelledby="skills-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Toolkit</p>
        <h2 id="skills-heading" className={styles.title}>
          Skills that show up on the job
        </h2>
        <p className={styles.lede}>
          Commercial strengths from fintech BD and AE work, alongside the languages and
          tools I use as a junior developer.
        </p>
      </header>

      <div className={styles.grid}>
        <article className={styles.group}>
          <h3 className={styles.groupTitle}>Fintech & account work</h3>
          <ul className={styles.chips}>
            {SKILLS.commercial.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.group}>
          <h3 className={styles.groupTitle}>Development</h3>
          <ul className={styles.chips}>
            {SKILLS.technical.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
