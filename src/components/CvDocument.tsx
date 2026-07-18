import { CV_DOWNLOAD } from '../content/cv'
import styles from './CvDocument.module.css'

const CV_PAGES = [
  { src: '/work/cv-page-1.png', alt: 'Michael Fitzgerald CV, page 1' },
  { src: '/work/cv-page-2.png', alt: 'Michael Fitzgerald CV, page 2' },
] as const

export function CvDocument() {
  return (
    <section id="cv" className={styles.section} aria-labelledby="cv-heading">
      <div className={styles.toolbar}>
        <h2 id="cv-heading" className={styles.title}>
          CV
        </h2>
        <a
          className={styles.download}
          href={CV_DOWNLOAD.href}
          download={CV_DOWNLOAD.filename}
        >
          Download PDF
        </a>
      </div>

      <div className={styles.pages}>
        {CV_PAGES.map((page) => (
          <figure key={page.src} className={styles.page}>
            <img src={page.src} alt={page.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  )
}
