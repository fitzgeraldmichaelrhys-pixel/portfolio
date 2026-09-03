import { SKILLS } from '../content/site'
import styles from './Capabilities.module.css'

export function Capabilities() {
  return (
    <section className={styles.capabilities} aria-labelledby="skills-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Toolkit</p>
        <h2 id="skills-heading" className={styles.title}>
          What I bring to a team
        </h2>
        <p className={styles.lede}>
          Account work first. A short programming set I use when I ship software.
        </p>
      </header>

      <div className={styles.grid}>
        <article className={`${styles.group} ${styles.groupCommercial}`}>
          <h3 className={styles.groupTitle}>Account management and fintech</h3>
          <ul className={styles.chips}>
            {SKILLS.commercial.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={`${styles.group} ${styles.groupDev}`}>
          <h3 className={styles.groupTitle}>Programming</h3>
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
