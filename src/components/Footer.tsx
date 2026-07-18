import { SITE } from '../content/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.line}>
          {SITE.name} · Junior developer / Account manager · {SITE.location}
        </p>
        <p className={styles.meta}>{SITE.year}</p>
      </div>
    </footer>
  )
}
