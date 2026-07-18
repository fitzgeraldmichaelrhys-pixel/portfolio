export const SITE = {
  name: 'Michael Fitzgerald',
  title: 'Junior developer · Account manager',
  oneLiner:
    'Fintech commercial experience at Revolut and PayPal, plus a growing engineering toolkit — ready for junior developer or account roles.',
  email: 'Mikeyfitz2021@gmail.com',
  phone: '+353 89 966 5732',
  phoneHref: 'tel:+353899665732',
  location: 'Limerick, Ireland',
  linkedin: 'https://www.linkedin.com/in/michael-fitzgerald-42abab206/',
  availability:
    'Open to junior developer, account executive, and business development roles — especially fintech.',
  education: 'BSc Computer Science — IU University, Germany (expected 09/2028)',
  school: "St Enda's Community School, Limerick — High School Diploma (2016)",
  auditPackUrl: 'https://getauditpack.com',
  year: new Date().getFullYear(),
} as const

export const HIGHLIGHTS = [
  { value: '5+', label: 'Years in sales & BD' },
  { value: '2', label: 'Fintech employers' },
  { value: 'AE / BDR', label: 'Revolut · PayPal' },
  { value: 'CS', label: 'Degree in progress' },
] as const

export const TRACKS = {
  fintech: {
    title: 'Account management & fintech',
    lede: 'Client-facing roles in high-velocity fintech and B2B environments.',
    points: [
      'Junior Account Executive at Revolut — client meetings, CRM, onboarding support',
      'Business Development Representative at PayPal — outreach, pipeline, account support',
      'Team lead experience at IDG Direct — coaching, metrics, daily ops',
      'Comfortable with phone, email, CRM systems, and quota-driven environments',
    ],
  },
  developer: {
    title: 'Junior developer',
    lede: 'Practical coding foundations while studying Computer Science.',
    points: [
      'Languages: C, Python, TypeScript, JavaScript, SQL',
      'Web: HTML, CSS, React, Node basics, Git',
      'Shipped a live side project (AuditPack) to learn end-to-end product work',
      'Fast learner — picks up tools quickly when a role needs them',
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
  ],
} as const
