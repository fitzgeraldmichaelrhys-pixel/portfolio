import type { CSSProperties } from 'react'
import type { Project } from '../content/projects'
import styles from './CaseStudy.module.css'

export type CaseStudyProps = {
  project: Project
}

type Metric = {
  value: string
  label: string
}

/** Pass through real assets; only rewrite legacy .webp placeholders to .svg */
function resolveMediaSrc(src: string): string {
  if (src.endsWith('.webp')) return src.replace(/\.webp$/i, '.svg')
  return src
}

function extractMetrics(outcomes: string[]): Metric[] {
  const metrics: Metric[] = []

  for (const outcome of outcomes) {
    const fpsMatch = outcome.match(/(\d+)fps/i)
    if (fpsMatch !== null) {
      metrics.push({ value: fpsMatch[1], label: 'FPS render target' })
      continue
    }

    const checkMatch = outcome.match(/(\d+)-check/i)
    if (checkMatch !== null) {
      metrics.push({ value: checkMatch[1], label: 'Pre-export validation checks' })
      continue
    }

    const wordNumberMatch = outcome.match(/^(One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten)\s/i)
    if (wordNumberMatch !== null) {
      const wordMap: Record<string, string> = {
        One: '1',
        Two: '2',
        Three: '3',
        Four: '4',
        Five: '5',
        Six: '6',
        Seven: '7',
        Eight: '8',
        Nine: '9',
        Ten: '10',
      }
      const value = wordMap[wordNumberMatch[1]] ?? wordNumberMatch[1]
      const label = outcome.replace(/^One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten\s/i, '').split('—')[0].trim()
      metrics.push({ value, label })
      continue
    }

    const digitMatch = outcome.match(/^(\d+)\s/)
    if (digitMatch !== null) {
      const label = outcome.replace(/^\d+\s/, '').split('—')[0].trim()
      metrics.push({ value: digitMatch[1], label })
    }
  }

  return metrics.slice(0, 4)
}

function MediaFrame({
  src,
  alt,
  aspect = '16 / 10',
  featured = false,
}: {
  src: string
  alt: string
  aspect?: string
  featured?: boolean
}) {
  return (
    <div
      className={`${styles.frame} ${featured ? styles.frameFeatured : ''}`}
      style={{ '--frame-aspect': aspect } as CSSProperties}
    >
      <div className={styles.frameInner}>
        <img src={resolveMediaSrc(src)} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  )
}

export function CaseStudy({ project }: CaseStudyProps) {
  const metrics = extractMetrics(project.outcomes)
  const hasGallery = project.gallery !== undefined && project.gallery.length > 0

  return (
    <article className={styles.caseStudy} aria-labelledby={`${project.id}-title`}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <header className={styles.header}>
            <p className={styles.index}>Case study</p>
            <h2 id={`${project.id}-title`} className={styles.title}>
              {project.title}
            </h2>
            <p className={styles.role}>{project.role}</p>
          </header>

          <div className={styles.sidebarMeta}>
            <section aria-labelledby={`${project.id}-stack`}>
              <h3 id={`${project.id}-stack`} className={styles.metaLabel}>
                Stack
              </h3>
              <ul className={styles.stackList}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {project.links.length > 0 && (
              <section aria-labelledby={`${project.id}-links`}>
                <h3 id={`${project.id}-links`} className={styles.metaLabel}>
                  Links
                </h3>
                <ul className={styles.linkList}>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <span className={styles.linkArrow} aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </aside>

        <div className={styles.main}>
          {project.media !== undefined && (
            <figure className={styles.heroFigure}>
              {project.media.type === 'video' ? (
                <div className={styles.frame} style={{ '--frame-aspect': '16 / 9' } as CSSProperties}>
                  <div className={styles.frameInner}>
                    <video src={project.media.src} controls muted playsInline />
                  </div>
                </div>
              ) : (
                <MediaFrame
                  src={project.media.src}
                  alt={project.media.alt ?? project.title}
                  aspect="16 / 10"
                  featured
                />
              )}
              {project.media.alt !== undefined && (
                <figcaption className={styles.heroCaption}>{project.media.alt}</figcaption>
              )}
            </figure>
          )}

          {metrics.length > 0 && (
            <section className={styles.metrics} aria-label="Key metrics">
              <ul className={styles.metricGrid}>
                {metrics.map((metric) => (
                  <li key={`${metric.value}-${metric.label}`} className={styles.metricItem}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.block} aria-labelledby={`${project.id}-problem`}>
            <h3 id={`${project.id}-problem`} className={styles.heading}>
              Problem
            </h3>
            <p className={styles.prose}>{project.problem}</p>
          </section>

          <section className={styles.block} aria-labelledby={`${project.id}-approach`}>
            <h3 id={`${project.id}-approach`} className={styles.heading}>
              Approach
            </h3>
            <ol className={styles.approachList}>
              {project.approach.map((step, index) => (
                <li key={step}>
                  <span className={styles.stepIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {hasGallery && (
            <section className={styles.gallerySection} aria-labelledby={`${project.id}-gallery`}>
              <div className={styles.galleryHeader}>
                <h3 id={`${project.id}-gallery`} className={styles.heading}>
                  Visuals
                </h3>
                <p className={styles.galleryHint}>Scroll the strip →</p>
              </div>
              <div className={styles.galleryStrip} role="list">
                {project.gallery!.map((item) => (
                  <figure key={item.src} className={styles.galleryItem} role="listitem">
                    <MediaFrame src={item.src} alt={item.alt} aspect="4 / 3" />
                    {item.caption !== undefined && (
                      <figcaption className={styles.galleryCaption}>{item.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          <section className={styles.block} aria-labelledby={`${project.id}-outcomes`}>
            <h3 id={`${project.id}-outcomes`} className={styles.heading}>
              Outcomes
            </h3>
            <ul className={styles.outcomesList}>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
