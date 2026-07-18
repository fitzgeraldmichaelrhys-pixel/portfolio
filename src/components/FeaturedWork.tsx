import { SITE } from '../content/site'
import styles from './FeaturedWork.module.css'

const SHOTS = [
  {
    src: '/work/auditpack-hero.png',
    alt: 'AuditPack product homepage',
    caption: 'Live product site',
  },
  {
    src: '/work/auditpack-workflow.png',
    alt: 'AuditPack workflow section',
    caption: 'Workflow',
  },
  {
    src: '/work/auditpack-standards.png',
    alt: 'AuditPack standards overview',
    caption: 'Standards',
  },
] as const

export function FeaturedWork() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Featured work</p>
        <h2 id="work-heading" className={styles.title}>
          AuditPack
        </h2>
        <p className={styles.lede}>
          A Compliance OS I built and shipped — TypeScript, React, Node — live at{' '}
          <a href={SITE.auditPackUrl} target="_blank" rel="noopener noreferrer">
            getauditpack.com
          </a>
          . Proof I can take a product from idea to production.
        </p>
      </header>

      <div className={styles.meta}>
        <span>TypeScript</span>
        <span>React</span>
        <span>Node</span>
        <span>Supabase</span>
        <span>Stripe</span>
      </div>

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
        Open AuditPack live →
      </a>
    </section>
  )
}
