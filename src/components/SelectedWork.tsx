import styles from './SelectedWork.module.css'

export function SelectedWork() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Featured project</p>
          <h2 id="work-heading" className={styles.title}>
            Something I shipped
          </h2>
        </header>

        <a href="#auditpack" className={styles.feature}>
          <div className={styles.thumbWrap}>
            <img
              className={styles.thumb}
              src="/work/auditpack-hero.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.body}>
            <span className={styles.tag}>TypeScript · React · Node</span>
            <h3 className={styles.cardTitle}>AuditPack</h3>
            <p className={styles.description}>
              A live Compliance OS that turns evidence into ISO-ready documentation.
              built end-to-end as a personal product project.
            </p>
            <span className={styles.cta}>Read the case study →</span>
          </div>
        </a>
      </div>
    </section>
  )
}
