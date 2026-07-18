import styles from './Experience.module.css'

const EXPERIENCE = [
  {
    company: 'Revolut',
    role: 'Junior Account Executive',
    period: '09/2025 – 03/2026',
    place: 'Galway, Ireland',
    bullets: [
      'Coordinated meetings between clients and senior account managers.',
      'Ran market research to find potential clients and spot industry trends.',
      'Kept CRM records accurate across client interactions.',
      'Supported new-client onboarding and built product knowledge through training.',
    ],
  },
  {
    company: 'PayPal',
    role: 'Business Development Representative',
    period: '03/2024 – 09/2025',
    place: 'Galway, Ireland',
    bullets: [
      'Reached potential clients through targeted outreach and relationship-building.',
      'Supported account management by resolving inquiries quickly.',
      'Handled customer questions by phone and email.',
      'Ran outreach through cold calling, email, and networking events.',
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generation Team Lead',
    period: '02/2021 – 01/2022',
    place: 'Galway, Ireland',
    bullets: [
      'Led daily operations and task assignments for the lead generation team.',
      'Coordinated training for new team members.',
      'Watched performance metrics against company standards.',
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generator',
    period: '01/2020 – 02/2021',
    place: 'Galway, Ireland',
    bullets: [
      'Generated leads through targeted outreach and clear communication.',
      'Researched potential clients using online tools and databases.',
    ],
  },
] as const

export function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.rail}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Career</p>
          <h2 id="experience-heading" className={styles.title}>
            Experience
          </h2>
          <p className={styles.lede}>
            Five years in business development and account roles at fintech and B2B
            companies: Revolut, PayPal, and IDG Direct.
          </p>
        </header>

        <ol className={styles.timeline}>
          {EXPERIENCE.map((entry) => (
            <li key={`${entry.company}-${entry.role}`} className={styles.entry}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.entryBody}>
                <div className={styles.entryHead}>
                  <h3 className={styles.company}>{entry.company}</h3>
                  <time className={styles.period}>{entry.period}</time>
                </div>
                <p className={styles.role}>
                  {entry.role}
                  <span className={styles.place}> · {entry.place}</span>
                </p>
                <ul className={styles.bullets}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
