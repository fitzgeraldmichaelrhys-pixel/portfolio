import { PAYPAL_SCORECARD } from '../content/kpis'
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
          Two years on the PayPal outbound desk, measured like everyone else:
          revenue, CSAT, talk time, daily calls. Booked meetings, show rate,
          connect rate, QA and adherence sat right next to those dials. Averages,
          not cherry picks.
        </p>
      </header>
      <ul className={styles.grid}>
        {PAYPAL_SCORECARD.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
