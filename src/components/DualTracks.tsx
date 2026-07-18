import { TRACKS } from '../content/site'
import styles from './DualTracks.module.css'

export function DualTracks() {
  return (
    <section id="tracks" className={styles.section} aria-labelledby="tracks-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Two strengths</p>
        <h2 id="tracks-heading" className={styles.title}>
          Commercial fintech experience, and a real product on the internet
        </h2>
      </header>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.cardCommercial}`}>
          <p className={styles.cardKicker}>Track 01 · Commercial</p>
          <h3 className={styles.cardTitle}>{TRACKS.fintech.title}</h3>
          <p className={styles.cardLede}>{TRACKS.fintech.lede}</p>
          <ul className={styles.list}>
            {TRACKS.fintech.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className={styles.logos}>
            <span>Revolut</span>
            <span>PayPal</span>
            <span>IDG Direct</span>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardDev}`}>
          <p className={styles.cardKicker}>Track 02 · Engineering</p>
          <h3 className={styles.cardTitle}>{TRACKS.developer.title}</h3>
          <p className={styles.cardLede}>{TRACKS.developer.lede}</p>
          <ul className={styles.list}>
            {TRACKS.developer.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className={styles.logos}>
            <span>C</span>
            <span>Python</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Node</span>
          </div>
        </article>
      </div>
    </section>
  )
}
