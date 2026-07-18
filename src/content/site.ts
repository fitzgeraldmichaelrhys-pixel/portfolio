export const SITE = {
  name: 'Michael Fitzgerald',
  title: 'Junior developer · Account manager',
  oneLiner:
    'I have sold and supported accounts at Revolut and PayPal, and I also ship real software. Looking for junior developer or account roles in fintech.',
  email: 'Mikeyfitz2021@gmail.com',
  phone: '+353 89 943 8384',
  phoneHref: 'tel:+353899438384',
  location: 'Galway, Ireland',
  linkedin: 'https://www.linkedin.com/in/michael-fitzgerald-42abab206/',
  availability:
    'Open to junior developer, account executive, and BD roles, especially in fintech or B2B SaaS.',
  education: 'BSc Computer Science, IU University, Germany (expected 09/2028)',
  school: "St Enda's Community School, Limerick. High School Diploma (2016)",
  auditPackUrl: 'https://getauditpack.com',
  year: new Date().getFullYear(),
} as const

export const HIGHLIGHTS = [
  { value: '5+', label: 'Years in sales & BD' },
  { value: '2', label: 'Fintech employers' },
  { value: 'Live', label: 'Product shipped' },
  { value: 'CS', label: 'Degree in progress' },
] as const

export const TRACKS = {
  fintech: {
    title: 'Account management & fintech',
    lede: 'Client work in fast B2B environments where pipeline and follow-through actually matter.',
    points: [
      'Junior Account Executive at Revolut: client meetings, CRM hygiene, onboarding support',
      'Business Development Representative at PayPal: outreach, pipeline, and account support',
      'Team lead at IDG Direct: coaching, daily metrics, and keeping a floor moving',
      'Comfortable on phone and email, in CRMs, and against a number',
    ],
  },
  developer: {
    title: 'Junior developer',
    lede: 'Not just coursework. I have a live product online that I designed, built, and still run.',
    points: [
      'Languages I use day to day: C, Python, TypeScript, JavaScript, and SQL',
      'Web stack: HTML, CSS, React, Node, Git',
      'AuditPack: full product path from UI and API through auth, payments, and deploys',
      'I pick up tools quickly when a team already has a stack in place',
    ],
  },
} as const

export const SKILLS = {
  commercial: [
    'Client management',
    'Business development',
    'Lead generation',
    'Account support',
    'CRM discipline',
    'Market research',
    'Pipeline ownership',
    'Relationship building',
  ],
  technical: [
    'C',
    'Python',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'SQL',
    'Git',
    'React',
    'Node.js',
    'Express',
    'Supabase',
    'Stripe',
  ],
} as const

export const AUDITPACK = {
  eyebrow: 'Featured work',
  title: 'AuditPack',
  ledeBefore:
    'A Compliance OS I built end to end and shipped at ',
  ledeAfter:
    '. Teams upload evidence, map it to ISO clauses, and export working packs instead of fighting folders of Word docs.',
  body: [
    'The front end is React and TypeScript. The API sits on Node and Express. Project data and auth live in Supabase. Purchases go through Stripe. That is the same path most small SaaS products take, just owned by me from blank repo to production.',
    'On the product side, users run gap analysis against standards, walk a guided workflow from raw evidence to a defensible pack, and export Word, Excel, or PDF. Public tools on the site cover gap analysis, benchmarks, and a how-it-works walkthrough so buyers can try the idea before they pay.',
  ],
  stack: ['TypeScript', 'React', 'Node', 'Express', 'Supabase', 'Stripe'],
  outcomes: [
    'Live product with checkout, not a mock',
    'Clause-mapped packs exportable to Word, Excel, and PDF',
    'Public gap analysis and benchmark tools on the marketing site',
  ],
} as const
