import { AUDITPACK, SITE } from '../content/site'
import styles from './FeaturedWork.module.css'

const SHOTS = [
  {
    src: '/work/auditpack-hero.png',
    alt: 'AuditPack product homepage',
    caption: 'Marketing site and product entry',
  },
  {
    src: '/work/auditpack-workflow.png',
    alt: 'AuditPack workflow section',
    caption: 'Evidence to pack workflow',
  },
  {
    src: '/work/auditpack-standards.png',
    alt: 'AuditPack standards overview',
    caption: 'Standards coverage',
  },
] as const

export function FeaturedWork() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className={styles.accentBar} aria-hidden="true" />
      <header className={styles.header}>
        <p className={styles.eyebrow}>{AUDITPACK.eyebrow}</p>
        <h2 id="work-heading" className={styles.title}>
          {AUDITPACK.title}
        </h2>
        <p className={styles.lede}>
          {AUDITPACK.ledeBefore}
          <a href={SITE.auditPackUrl} target="_blank" rel="noopener noreferrer">
            getauditpack.com
          </a>
          {AUDITPACK.ledeAfter}
        </p>
      </header>

      <div className={styles.body}>
        {AUDITPACK.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.meta}>
        {AUDITPACK.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <ul className={styles.outcomes}>
        {AUDITPACK.outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className={styles.gallery}>
        {SHOTS.map((shot) => (
          <figure key={shot.src} className={styles.shot}>
            <div className={styles.frame}>
              <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <a
        className={styles.cta}
        href={SITE.auditPackUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open AuditPack live
      </a>
    </section>
  )
}
