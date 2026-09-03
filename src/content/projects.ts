export type ProjectLink = {
  label: string
  href: string
}

export type ProjectMedia = {
  type: 'image' | 'video'
  src: string
  alt?: string
}

export type ProjectGalleryItem = {
  src: string
  alt: string
  caption?: string
}

export type Project = {
  id: string
  title: string
  role: string
  stack: string[]
  problem: string
  approach: string[]
  outcomes: string[]
  links: ProjectLink[]
  media?: ProjectMedia
  gallery?: ProjectGalleryItem[]
}

export const PROJECTS: Project[] = [
  {
    id: 'auditpack',
    title: 'AuditPack',
    role: 'Personal project. Full-stack compliance SaaS for ISO documentation',
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Stripe',
    ],
    problem:
      'Teams preparing for ISO audits struggle with scattered policies and weak evidence. I wanted to build a real B2B SaaS product that turns uploads into structured, exportable documentation.',
    approach: [
      'Built a guided web app where users upload evidence and generate clause-mapped working packs.',
      'Used TypeScript and React for the UI and Node.js / Express for the REST API.',
      'Stored project data with authentication on Supabase (PostgreSQL) and added Stripe for purchases.',
      'Shipped live at getauditpack.com with gap analysis and benchmark tools.',
    ],
    outcomes: [
      'Live SaaS used as portfolio proof of shipping a full product path: UI, API, auth, payments, deploys.',
      'Supports multiple ISO standards with exportable Word, Excel, and PDF packs.',
      'Public tools: gap analysis, benchmark methodology, and how-it-works walkthrough.',
    ],
    links: [
      { label: 'Live site', href: 'https://getauditpack.com' },
      { label: 'How it works', href: 'https://getauditpack.com/how-it-works' },
      { label: 'Gap analysis', href: 'https://getauditpack.com/gap-analysis' },
    ],
    media: {
      type: 'image',
      src: '/work/auditpack-hero.png',
      alt: 'AuditPack marketing site and evidence workspace',
    },
    gallery: [
      {
        src: '/work/auditpack-workflow.png',
        alt: 'AuditPack workflow steps',
        caption: 'From evidence pile to defensible pack',
      },
      {
        src: '/work/auditpack-standards.png',
        alt: 'AuditPack standards overview',
        caption: 'One interface across ISO standards',
      },
    ],
  },
  {
    id: 'mimir',
    title: 'Mimir',
    role: 'Personal project. Self-hosted AI workspace and GPU inference platform',
    stack: [
      'Python',
      'FastAPI',
      'AWS EC2',
      'NVIDIA L40S',
      'Ollama',
      'Docker',
      'SSH',
      'boto3',
    ],
    problem:
      'Cloud LLM APIs are expensive, rate-limited, and lock the model behind someone else\'s stack. I wanted a private control plane on my PC that could start a real GPU, serve one strong model, and plug into the tools I already use — including Cursor.',
    approach: [
      'Wrote a FastAPI portal that manages AWS EC2 profiles, starts and stops a g6e.2xlarge (NVIDIA L40S, 48 GB), and tracks hourly cost.',
      'Opened an SSH tunnel to Ollama on the box and proxied an OpenAI-compatible /v1 API so Cursor can use the same 27B model.',
      'Pinned one model in VRAM at a 128k context window, with coding-speed profiles for agent work.',
      'Added a Docker sidecar for image and video generation, a PWA dashboard, Whisper / Kokoro voice, and snapshot backup of GPU weights.',
    ],
    outcomes: [
      'Working local HQ at port 8000: chat, coding agent, media studio, and Cursor gateway on one suite.',
      'Production-style ops: nvidia-smi monitoring, instance lifecycle, and restore-from-snapshot instead of a fresh 29 GB+ pull.',
      'Same model available to Cursor, a folder-scoped coding agent, Discord, and a phone PWA.',
    ],
    links: [],
    media: {
      type: 'image',
      src: '/work/mimir-portal.png',
      alt: 'Mimir HQ portal with Chat workspace and GPU cost panel',
    },
    gallery: [
      {
        src: '/work/mimir-cli.png',
        alt: 'Mimir Console CLI',
        caption: 'Start, stop, backup, and open HQ from the console',
      },
      {
        src: '/work/mimir-portal-cursor.png',
        alt: 'Cursor live monitor in the Mimir portal',
        caption: 'Cursor talks to http://localhost:8000/v1',
      },
    ],
  },
]

export const PROJECT_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project]),
)
