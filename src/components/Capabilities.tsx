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
          Commercial habits from Revolut and PayPal on one side. Languages and product
          tooling I use to ship on the other.
        </p>
      </header>

      <div className={styles.grid}>
        <article className={`${styles.group} ${styles.groupCommercial}`}>
          <h3 className={styles.groupTitle}>Fintech & account work</h3>
          <ul className={styles.chips}>
            {SKILLS.commercial.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={`${styles.group} ${styles.groupDev}`}>
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
