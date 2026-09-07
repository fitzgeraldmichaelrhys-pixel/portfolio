export type RoleMetric = {
  value: string
  label: string
}

export const EXPERIENCE: {
  company: string
  role: string
  period: string
  place: string
  bullets: string[]
  metrics?: RoleMetric[]
}[] = [
  {
    company: 'Revolut',
    role: 'Junior Account Executive',
    period: '09/2025 – 03/2026',
    place: 'Galway, Ireland',
    bullets: [
      'Worked with senior Account Managers to set up and run client meetings across a B2B fintech book of accounts.',
      'Supported day-to-day account management: follow-ups, stakeholder coordination, and keeping the next conversation moving.',
      'Kept Customer Relationship Management (CRM) records accurate so account history and pipeline stayed visible to the team.',
      'Helped onboard new clients and sat through product training so I could answer account questions without handing every query up.',
    ],
  },
  {
    company: 'PayPal',
    role: 'Business Development Representative',
    period: '03/2024 – 09/2025',
    place: 'Galway, Ireland',
    metrics: [
      { value: '111%', label: 'Revenue vs target' },
      { value: '99%', label: 'CSAT' },
      { value: '99%', label: 'Of 200 calls / day' },
      { value: '96%', label: 'Of 2h 30m talk time' },
    ],
    bullets: [
      'Averaged 111% of the revenue target while holding 99% CSAT — commercial result without burning the customer.',
      'Hit 99% of a 200-call daily target and 96% of a 2 hour 30 minute daily talk-time target: activity and real conversation time, not empty dials.',
      'Owned outbound pipeline: cold calling, email outreach, and networking events aimed at prospective B2B clients.',
      'Backed the account management team by taking client inquiries on phone and email and closing the loop quickly.',
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generation Team Lead',
    period: '02/2021 – 01/2022',
    place: 'Galway, Ireland',
    bullets: [
      'Ran daily operations for a lead generation team: priorities, task assignment, and keeping the floor moving.',
      'Coached and trained new hires on outreach quality, not just activity volume.',
      'Tracked performance against company targets and stepped in when a number was slipping.',
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generator',
    period: '01/2020 – 02/2021',
    place: 'Galway, Ireland',
    bullets: [
      'Generated leads through targeted outreach and clear communication.',
      'Researched prospective clients using online tools and databases.',
    ],
  },
]

export const EDUCATION = [
  {
    school: 'IU University of Applied Sciences',
    credential: 'BSc Computer Science',
    period: 'Expected 09/2028',
    place: 'Germany (distance)',
    detail:
      'Undergraduate Computer Science degree in progress alongside full-time work and shipped software projects.',
  },
  {
    school: "St Enda's Community School",
    credential: 'High School Diploma',
    period: '2016',
    place: 'Limerick, Ireland',
    detail: 'Completed secondary education in Limerick.',
  },
] as const
