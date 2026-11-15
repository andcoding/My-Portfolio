export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  architecture: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  status: 'Live' | 'In Progress';
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'wp-automotive-inventory-plugin',
    title: 'Custom Automotive Inventory Plugin',
    category: 'Backend & CMS Engineering',
    summary:
      'Custom WordPress plugin registering a Vehicles Custom Post Type, sanitized admin meta boxes for VIN and pricing data, and structured query filtering.',
    problem:
      'Standard dealership themes rely on bloated third-party page builders or rigid feed importers that slow down database queries and complicate custom vehicle field management.',
    architecture: [
      'Registered a custom `vehicle` post type and hierarchical taxonomies (Make, Model, Body Style) using native WordPress hooks.',
      'Built custom admin meta boxes with nonce verification, capability checks, and strict input sanitization for VIN, mileage, and MSRP.',
      'Exposed clean REST API fields so vehicle inventory can be queried by external frontends or internal dealership widgets.',
    ],
    stack: ['PHP', 'WordPress Plugin API', 'MySQL', 'REST API'],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
  {
    slug: 'headless-dealership-storefront',
    title: 'Headless Dealership Showcase',
    category: 'Full-Stack Architecture',
    summary:
      'Decoupled vehicle inventory storefront consuming WordPress REST API endpoints inside a server-rendered Next.js and TypeScript frontend.',
    problem:
      'Traditional monolithic WordPress dealership sites struggle with Core Web Vitals and instant search filtering when rendering dozens of high-resolution vehicle listings.',
    architecture: [
      'Decoupled content management (WordPress backend) from presentation (Next.js App Router frontend) via typed API fetchers.',
      'Implemented Incremental Static Regeneration (ISR) to cache inventory listings at the edge while keeping pricing updates fresh.',
      'Built client-side multi-facet filtering (price range, make, year) in TypeScript with zero full-page reloads.',
    ],
    stack: ['Next.js', 'TypeScript', 'WP REST API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
  {
    slug: 'crm-pipeline-kpi-dashboard',
    title: 'CRM Pipeline & KPI Dashboard',
    category: 'Data & Analytics',
    summary:
      'Full-stack reporting dashboard tracking investor pipelines, conversion metrics, and operational KPIs backed by PostgreSQL.',
    problem:
      'Operations and client success teams often rely on manual spreadsheet exports to reconcile CRM pipeline stages and track SLA performance.',
    architecture: [
      'Designed a normalized PostgreSQL schema modeling accounts, pipeline stages, deal values, and activity timestamps.',
      'Built server-side data aggregation queries in Python/SQL to compute stage conversion rates and cycle times.',
      'Rendered interactive KPI summary cards and pipeline tables in Next.js with strict TypeScript interfaces.',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python'],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
  {
    slug: 'cross-device-qa-monitor',
    title: 'Cross-Device QA & Uptime Monitor',
    category: 'DevOps & Automation',
    summary:
      'Automated Playwright and Python runner verifying HTTP status codes, capturing mobile/desktop screenshots, and archiving logs to AWS S3.',
    problem:
      'Manually checking responsive layouts, lead forms, and script tags across dozens of commercial dealership sites after updates is time-consuming and error-prone.',
    architecture: [
      'Engineered an automated browser runner using Python and Playwright to audit URLs across desktop (1440px) and mobile (390px) viewports.',
      'Added automated checks for HTTP 200 responses, broken asset links, and presence of critical GTM/GA4 tracking tags.',
      'Configured automated JSON report and screenshot uploads to an AWS S3 bucket triggered via GitHub Actions.',
    ],
    stack: ['Python', 'Playwright', 'AWS S3', 'GitHub Actions'],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}