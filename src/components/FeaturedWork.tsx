import { FEATURED, type FeaturedProject } from '../content/site'
import styles from './FeaturedWork.module.css'

function ProjectBlock({ project }: { project: FeaturedProject }) {
  return (
    <article id={project.id} className={styles.project} aria-labelledby={`${project.id}-heading`}>
      <div className={styles.accentBar} aria-hidden="true" />
      <header className={styles.header}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>
        <h3 id={`${project.id}-heading`} className={styles.title}>
          {project.title}
        </h3>
        <p className={styles.lede}>
          {project.ledeBefore}
          {project.ledeLink !== undefined && (
            <a
              href={project.ledeLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.ledeLink.label}
            </a>
          )}
          {project.ledeAfter}
        </p>
      </header>

      <div className={styles.body}>
        {project.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.meta}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <ul className={styles.outcomes}>
        {project.outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

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

      {project.cta !== undefined && (
        <a
          className={styles.cta}
          href={project.cta.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.cta.label}
        </a>
      )}
    </article>
  )
}

export function FeaturedWork() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div id="work" />
      <header className={styles.intro}>
        <p className={styles.introEyebrow}>Selected work</p>
        <h2 id="projects-heading" className={styles.introTitle}>
          Projects
        </h2>
        <p className={styles.introLede}>
          Two systems I designed, built, and still run: a live compliance SaaS
          and a self-hosted GPU inference platform.
        </p>
      </header>

      {FEATURED.map((project) => (
        <ProjectBlock key={project.id} project={project} />
      ))}
    </section>
  )
}
