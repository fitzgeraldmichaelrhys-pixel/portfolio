export const SITE = {
  name: 'Michael Fitzgerald',
  title: 'Account Manager · Fintech and B2B',
  oneLiner:
    "I talk to customers for a living — at Revolut I've coordinated the meetings behind a fintech pipeline, and on PayPal's outbound desk I hit my number in revenue, CSAT, talk time, and call activity. People think 'numbers person,' which is fair. They also catch me building software: two real systems this site shows you below.",
  email: 'Mikeyfitz2021@gmail.com',
  phone: '+353 89 943 8384',
  phoneHref: 'tel:+353899438384',
  location: 'Galway, Ireland',
  linkedin: 'https://www.linkedin.com/in/michael-fitzgerald-42abab206/',
  github: 'https://github.com/fitzgeraldmichaelrhys-pixel',
  githubPortfolio: 'https://github.com/fitzgeraldmichaelrhys-pixel/portfolio',
  availability:
    "Hunting for my next client-facing role — account manager, AE, or BD in fintech or B2B SaaS. Bonus if the team ships software I have opinions about.",
  education: 'BSc Computer Science, IU University, Germany (expected 09/2028)',
  school: "St Enda's Community School, Limerick. High School Diploma (2016)",
  auditPackUrl: 'https://getauditpack.com',
  year: new Date().getFullYear(),
} as const

export const TRACKS = {
  fintech: {
    title: 'The side that pays my rent',
    lede:
      "Talking to people about money software is what my days actually look like — cold callers before lunch, CRM entries after. I'm comfortable being the person who has to make a number, and it shows in how I handle a client once they pick up.",
    points: [
      'Revolut, Junior Account Executive — kept senior AMs running: client meetings, CRM records, onboarding support',
      "PayPal BDR — a real target every day. Cleared it (full scorecard below)",
      'IDG Direct — ran the floor for lead generation, coached reps, chased daily metrics',
      'Good enough people-wise that I got hired and kept working — but I can prove it with numbers',
    ],
  },
  developer: {
    title: 'The side that keeps me honest',
    lede:
      "This is less of a hobby and more how I stay sharp. Two real systems I designed, built, and still run daily: one's a live B2B SaaS the other side pays for, the other keeps an NVIDIA GPU on AWS working like it means it.",
    points: [
      'The toolbox: C to learn the low side, then Python, TypeScript and SQL on top; React, Node.js and FastAPI when I build things people click',
      'AuditPack — a live SaaS with real signups, Stripe checkout, and production deploys. I own every layer of it',
      "Mimir — my GPU box on AWS. It speaks the OpenAI dialect now, so Cursor just points at it",
      "And this site. It's React on a custom design system I built myself — look in the source if you don't believe me",
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
    eyebrow: 'The thing I\'m proudest of shipping',
    title: 'AuditPack',
    ledeBefore:
      "Everyone knows the feeling of a compliance audit — weeks lost wrangling evidence out of folders to fit into Word templates. AuditPack is my answer to that, live at ",
    ledeLink: { href: 'https://getauditpack.com', label: 'getauditpack.com' },
    ledeAfter:
      '. Teams upload their proof, we map each file to the specific ISO clause it satisfies, and out comes an exportable audit pack instead of another spreadsheet nightmare.',
    body: [
      'The front end is React and TypeScript. The REST API sits on Node.js and Express. Project data and authentication live in Supabase (PostgreSQL). Purchases go through Stripe. That’s the same stack most small B2B SaaS products run — except here I own every layer, from empty repo to production deploys.',
      'On the product side, users start with a gap analysis against whatever ISO standard they have on the horizon, then work through evidence item by item with guidance on what maps where. The end result exports clean into Word, Excel, or PDF. There are also public tools — free gap analyses and benchmark checkers — so buyers can feel the value before paying.',
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
      'Real users pay for it: live SaaS with Stripe checkout, Supabase auth, and production deploys — not a mock or demo',
      "If you're mapping evidence to ISO clauses manually right now, imagine letting this do it for you",
      "You can try the gap analysis tool free on getauditpack.com before committing to anything",
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
