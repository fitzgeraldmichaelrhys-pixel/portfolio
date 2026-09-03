export const SITE = {
  name: 'Michael Fitzgerald',
  title: 'Account Manager · Fintech and B2B',
  oneLiner:
    'Account management and business development at Revolut and PayPal. I also ship software, but client work is the main job. Open to account manager, account executive, and BDR roles in fintech and B2B SaaS.',
  email: 'Mikeyfitz2021@gmail.com',
  phone: '+353 89 943 8384',
  phoneHref: 'tel:+353899438384',
  location: 'Galway, Ireland',
  linkedin: 'https://www.linkedin.com/in/michael-fitzgerald-42abab206/',
  github: 'https://github.com/fitzgeraldmichaelrhys-pixel',
  githubPortfolio: 'https://github.com/fitzgeraldmichaelrhys-pixel/portfolio',
  availability:
    'Open to account manager, account executive, and business development roles in fintech and B2B SaaS. Also open to junior commercial-technical roles where client work comes first.',
  education: 'BSc Computer Science, IU University, Germany (expected 09/2028)',
  school: "St Enda's Community School, Limerick. High School Diploma (2016)",
  auditPackUrl: 'https://getauditpack.com',
  year: new Date().getFullYear(),
} as const

export const HIGHLIGHTS = [
  { value: '5+', label: 'Years in sales and BD' },
  { value: 'AE', label: 'Revolut and PayPal' },
  { value: '2', label: 'Shipped systems' },
  { value: 'BSc', label: 'Computer Science' },
] as const

export const TRACKS = {
  fintech: {
    title: 'Account management and fintech',
    lede: 'Client-facing work in fast B2B environments where pipeline, CRM hygiene, and follow-through actually matter.',
    points: [
      'Junior Account Executive at Revolut: client meetings, CRM, and onboarding support',
      'Business Development Representative at PayPal: outbound outreach, pipeline, and account support',
      'Lead Generation Team Lead at IDG Direct: coaching, daily metrics, and floor operations',
      'Comfortable on phone and email, in CRM tools, and against a number',
    ],
  },
  developer: {
    title: 'Junior full-stack developer',
    lede: 'Not just coursework. Two systems I designed, built, and still run: a live SaaS product and a GPU inference platform.',
    points: [
      'Languages: C, Python, TypeScript, JavaScript, and SQL',
      'Web and APIs: HTML, CSS, React, Node.js, Express, FastAPI, REST APIs, Git',
      'AuditPack: full product path from UI and API through authentication, payments, and production deploys',
      'Mimir: Python/FastAPI control plane for an AWS GPU box, with an OpenAI-compatible API for Cursor',
    ],
  },
} as const

export const SKILLS = {
  commercial: [
    'Account management',
    'Account executive',
    'Business development',
    'Lead generation',
    'Client onboarding',
    'CRM (Customer Relationship Management)',
    'Pipeline management',
    'B2B sales',
    'Fintech',
    'Cold outreach',
    'Relationship management',
    'Market research',
  ],
  technical: [
    'TypeScript',
    'JavaScript',
    'Python',
    'C',
    'SQL',
    'React',
    'Node.js',
    'FastAPI',
    'Git',
  ],
} as const

export type FeaturedShot = {
  src: string
  alt: string
  caption: string
}

export type FeaturedProject = {
  id: string
  eyebrow: string
  title: string
  ledeBefore: string
  ledeLink?: { href: string; label: string }
  ledeAfter: string
  body: string[]
  stack: string[]
  outcomes: string[]
  shots: readonly FeaturedShot[]
  cta?: { href: string; label: string }
}

export const FEATURED: FeaturedProject[] = [
  {
    id: 'auditpack',
    eyebrow: 'Featured product',
    title: 'AuditPack',
    ledeBefore: 'A compliance SaaS I built end to end and shipped at ',
    ledeLink: { href: 'https://getauditpack.com', label: 'getauditpack.com' },
    ledeAfter:
      '. Teams upload evidence, map it to ISO clauses, and export working packs instead of fighting folders of Word documents.',
    body: [
      'The front end is React and TypeScript. The REST API sits on Node.js and Express. Project data and authentication live in Supabase (PostgreSQL). Purchases go through Stripe. That is the same path most small B2B SaaS products take, owned by me from blank repository to production.',
      'On the product side, users run gap analysis against ISO standards, walk a guided workflow from raw evidence to a defensible pack, and export Word, Excel, or PDF. Public tools on the marketing site cover gap analysis, benchmarks, and a how-it-works walkthrough so buyers can try the idea before they pay.',
    ],
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'REST APIs',
      'Supabase',
      'PostgreSQL',
      'Stripe',
    ],
    outcomes: [
      'Live SaaS with authentication, checkout, and production deploys — not a mock',
      'Clause-mapped packs exportable to Word, Excel, and PDF',
      'Public gap analysis and benchmark tools on the marketing site',
    ],
    shots: [
      {
        src: '/work/auditpack-hero.png',
        alt: 'AuditPack product homepage showing the compliance workspace',
        caption: 'Marketing site and product entry',
      },
      {
        src: '/work/auditpack-workflow.png',
        alt: 'AuditPack workflow from evidence upload to exportable pack',
        caption: 'Evidence to pack workflow',
      },
      {
        src: '/work/auditpack-standards.png',
        alt: 'AuditPack ISO standards coverage overview',
        caption: 'Standards coverage',
      },
    ],
    cta: { href: 'https://getauditpack.com', label: 'Open AuditPack live' },
  },
  {
    id: 'mimir',
    eyebrow: 'Systems project',
    title: 'Mimir',
    ledeBefore:
      'A self-hosted AI workspace I designed and built: a FastAPI control plane on my PC talking to a dedicated NVIDIA L40S GPU on AWS. Chat, a coding agent, still and video generation, and an OpenAI-compatible API that Cursor can point at.',
    ledeAfter: '',
    body: [
      'The portal is Python and FastAPI. It starts and stops the GPU instance with boto3, opens an SSH tunnel to Ollama, and proxies an OpenAI-compatible /v1 API so Cursor and other tools use the same 27B model. A Docker sidecar on the box handles image and video generation. The dashboard is a progressive web app I can open from a phone on the same network.',
      'I treated it like production infrastructure: one model pinned in 48 GB of VRAM at a 128k context window, hourly cost tracking, GPU stats over SSH (nvidia-smi), and snapshot backup/restore of model weights so a new instance does not re-download tens of gigabytes. Voice uses Whisper for speech-to-text and Kokoro for speech synthesis. A Discord bot shares the same model.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'AWS EC2',
      'NVIDIA L40S',
      'Ollama',
      'Docker',
      'SSH',
      'REST APIs',
    ],
    outcomes: [
      'OpenAI-compatible gateway at localhost:8000/v1, used as a Cursor model endpoint',
      'GPU lifecycle, cost tracking ($2.24/hr g6e.2xlarge), and nvidia-smi monitoring from the dashboard',
      '128k context on a 27B Qwen3 model, with chat, coding agent, and media workspaces in one suite',
      'Instance snapshot backup so GPU swaps restore weights instead of a fresh 29 GB+ pull',
    ],
    shots: [
      {
        src: '/work/mimir-portal.png',
        alt: 'Mimir HQ portal on Chat: GPU running, cost tracking, and workspaces',
        caption: 'Portal — HQ dashboard',
      },
      {
        src: '/work/mimir-cli.png',
        alt: 'Mimir Console CLI with GPU running, HQ URL, and numbered control menu',
        caption: 'CLI — Mimir Console',
      },
      {
        src: '/work/mimir-portal-cursor.png',
        alt: 'Mimir Cursor workspace with live agent monitor and localhost /v1 base URL',
        caption: 'Portal — Cursor live monitor',
      },
    ],
  },
]
