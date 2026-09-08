import { useEffect, useState } from 'react'
import { FEATURED, type FeaturedProject } from '../content/site'
import styles from './FeaturedWork.module.css'

function ProjectCaseStudy({ project, index }: { project: FeaturedProject; index: number }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <article id={project.id} className={styles.project} aria-labelledby={`${project.id}-title`}>
      <header className={styles.caseHeader}>
        <p className={styles.kickerRow}>
          <span className={styles.kickerNum} aria-hidden="true">{num}</span>
          <span className={styles.eyebrow}>{project.eyebrow}</span>
        </p>

        <h3 id={`${project.id}-title`} className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.lede}>
          {project.ledeBefore}
          {project.ledeLink !== undefined && (
            <a href={project.ledeLink.href} target="_blank" rel="noopener noreferrer">
              {project.ledeLink.label}
            </a>
          )}
          {project.ledeAfter}
        </p>
      </header>

      <div className={styles.caseGrid}>
        <div className={styles.prose}>
          {project.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <aside className={styles.rail} aria-label={`${project.title} details`}>
          <p className={styles.railLabel}>Stack</p>
          <ul className={styles.railList}>
            {project.stack.map((item, i) => (
              <li key={item}>
                <span className={styles.railIndex}>{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>

          <p className={styles.railLabel}>Results</p>
          <ul className={styles.resultList}>
            {project.outcomes.map((item, i) => (
              <li key={i}>
                <span className={styles.railIndex}>{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>

          {project.cta !== undefined && (
            <a className={styles.cta} href={project.cta.href} target="_blank" rel="noopener noreferrer">
              {project.cta.label} <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </aside>
      </div>

      <div className={styles.gallery}>
        {project.shots.map((shot) => (
          <figure key={shot.src} className={styles.shot}>
            <div className={styles.frame}>
              <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}

export function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(FEATURED[0]?.id ?? '')

  useEffect(() => {
    if (FEATURED.length === 0) return
    const elements = FEATURED.map((project) => document.getElementById(project.id)).filter(
      (node): node is HTMLElement => node !== null,
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveProject(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px' },
    )

    for (const node of elements) observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div id="work" />
      <div className={styles.inner}>
        <aside className={styles.index} aria-label="Project index">
          <p className={styles.introEyebrow}>Selected work</p>
          <h2 id="projects-heading" className={styles.indexHeading}>Projects.</h2>

          <ul className={styles.indexList}>
            {FEATURED.map((project, index) => (
              <li key={project.id} className={styles.indexRowWrap}>
                <a
                  href={`#${project.id}`}
                  aria-current={project.id === activeProject ? 'true' : undefined}
                  className={`${styles.indexLink} ${
                    project.id === activeProject ? styles.active : ''
                  }`}
                >
                  <span className={styles.indexIndexRow}>
                    <span className={styles.indexNumber}>{String(index + 1).padStart(2, '0')}</span>
                    {project.id !== activeProject && (
                      <span className={styles.indexArrow} aria-hidden="true">
                        &rarr;
                      </span>
                    )}
                  </span>
                  <span className={styles.indexTitle}>{project.title}</span>
                  <span className={styles.indexMeta}>
                    {project.eyebrow}{' '}
                    {project.cta !== undefined ? '\u00b7 live' : ''}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.indexNote}>
            Two systems I designed, built, and still run: a production SaaS from blank repo to paid
            users, and the GPU platform powering this page&rsquo;s own AI.
          </p>

          <p className={styles.indexCount} aria-hidden="true">
            &mdash; {FEATURED.length.toString().padStart(2, '0')} / 0{FEATURED.length} shown
          </p>
        </aside>

        <div className={styles.studies}>
          {FEATURED.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
