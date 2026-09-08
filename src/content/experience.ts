import { PAYPAL_METRICS } from './kpis'

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
      'Set up and ran client meetings across a B2B fintech book, shoulder to shoulder with senior Account Managers — the kind of work that shows you where accounts are actually heading.',
      'Kept days moving: follow-ups, stakeholder coordination, making sure the next conversation happened without me chasing it down first.',
      'Treated CRM like something customers would one day read. If account history and pipeline were wrong there, they were wrong everywhere.',
      'Brought new clients aboard myself — onboarding flows plus product training, so I could answer most account questions instead of passing them upstairs.',
    ],
  },
  {
    company: 'PayPal',
    role: 'Business Development Representative',
    period: '03/2024 – 09/2025',
    place: 'Galway, Ireland',
    metrics: PAYPAL_METRICS.map(({ value, label }) => ({ value, label })),
    bullets: [
      "Averaged 111% of revenue target with CSAT holding near 99% — growing the book without torching the relationships it depends on.",
      'Dialled ~200 calls a day and hit 96–97% of talk-time targets. That\'s real conversation time, not padded connect stats.',
      'Ran my own numbers against meetings booked, show rate, decision-maker connect rate and call QA — the metrics that actually sit next to the dials.',
      'Owned outbound pipeline end-to-end: cold calls, email sequences, and networking events aimed at B2B prospects who had never heard of us.',
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generation Team Lead',
    period: '02/2021 – 01/2022',
    place: 'Galway, Ireland',
    bullets: [
      "Ran the day for a lead generation team — set priorities, split up the work, kept the floor moving between 9 and 6.",
      'Trained new starters on making calls people answer, not just hitting dial counts. Volume means nothing if the conversation is bad.',
      "Watched the numbers daily and stepped in when someone was slipping, rather than waiting for Monday's review to find out a target had quietly died.",
    ],
  },
  {
    company: 'IDG Direct',
    role: 'Lead Generator',
    period: '01/2020 – 02/2021',
    place: 'Galway, Ireland',
    bullets: [
      "Cold called lists I built myself — researched each prospect before dialling so the first line wasn't generic.",
      'Owned prospecting end-to-end: finding the right people, figuring out how to reach them, getting a yes out of it.',
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
