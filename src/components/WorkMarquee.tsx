import styles from './WorkMarquee.module.css'

const TECH_WORDS = [
  'React',
  'TypeScript',
  'Supabase',
  'RAG',
  'Canvas',
  'Workers',
  'FastAPI',
  'Stripe',
] as const

function MarqueeTrack() {
  return (
    <div className={styles.track} aria-hidden="true">
      {TECH_WORDS.map((word) => (
        <span key={word} className={styles.word}>
          {word}
        </span>
      ))}
    </div>
  )
}

export function WorkMarquee() {
  return (
    <div className={styles.marquee} aria-label="Technologies used across projects">
      <div className={styles.label} aria-hidden="true">
        Stack
      </div>
      <div className={styles.rail}>
        <div className={styles.inner}>
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </div>
  )
}
