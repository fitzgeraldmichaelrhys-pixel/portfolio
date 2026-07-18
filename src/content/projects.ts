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
    role: 'Personal project — Compliance OS for ISO documentation',
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'Supabase', 'Stripe'],
    problem:
      'Teams preparing for ISO audits struggle with scattered policies and weak evidence. I wanted to build a real product that turns uploads into structured, exportable documentation.',
    approach: [
      'Built a guided web app where users upload evidence and generate clause-mapped working packs.',
      'Used TypeScript + React for the UI and Node/Express for the API.',
      'Stored project data with Supabase and added Stripe for purchases.',
      'Shipped live at getauditpack.com with gap analysis and benchmark tools.',
    ],
    outcomes: [
      'Live product used as a portfolio proof of shipping end-to-end.',
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
]

export const PROJECT_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project]),
)
