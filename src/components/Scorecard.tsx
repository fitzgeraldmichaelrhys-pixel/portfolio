import { PAYPAL_SCORECARD } from '../content/site'
import styles from './Scorecard.module.css'

export function Scorecard() {
  return (
    <section className={styles.section} aria-labelledby="scorecard-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>PayPal BDR desk</p>
        <h2 id="scorecard-heading" className={styles.title}>
          What I was measured on
        </h2>
        <p className={styles.lede}>
          Averages on the Business Development desk. The combination is the point:
          I hit the commercial number, the activity number, and customer
          satisfaction in the same seat — the profile a high-volume outbound team
          actually keeps.
        </p>
      </header>
      <ul className={styles.grid}>
        {PAYPAL_SCORECARD.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
