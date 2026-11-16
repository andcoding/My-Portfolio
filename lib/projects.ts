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
    slug: 'scalable-home-goods-ecommerce-platform',
    title: 'Scalable Home Goods Ecommerce Platform',
    category: 'Ecommerce Engineering',
    summary:
      'A scalable WooCommerce platform for a home goods retailer, featuring product variations, secure checkout, inventory management, customer accounts, and custom REST API integrations.',
    problem:
      'Home goods retailers need a reliable shopping experience that supports complex product catalogs, secure payments, accurate inventory, and efficient order operations as traffic grows.',
    architecture: [
      'Built custom WooCommerce extensions in PHP for product workflows, inventory rules, order automation, and retailer-specific business logic.',
      'Integrated secure payment processing, customer accounts, coupons, shipping, and tax rules using WooCommerce-compatible services.',
      'Developed versioned REST API endpoints with authentication, permission checks, validation, pagination, and rate limiting for external integrations.',
      'Applied caching, optimized product images, database indexing, CDN delivery, automated backups, and monitoring to improve reliability and performance.',
    ],
    stack: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'MySQL',
      'REST API',
      'Stripe',
      'Redis',
      'Docker',
      'GitHub Actions',
    ],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
  {
    slug: 'dealership-inventory-lead-platform',
    title: 'Dealership Inventory & Lead Platform',
    category: 'Full-Stack Architecture',
    summary:
      'Modern dealership platform for searchable vehicle inventory, detailed vehicle pages, customer inquiries, and protected lead management.',
    problem:
      'Dealership teams need a fast, searchable inventory experience that makes vehicle discovery simple for customers while centralizing inquiries for sales teams.',
    architecture: [
      'Built server-rendered inventory and Search Results Pages with Next.js App Router, TypeScript, and Tailwind CSS.',
      'Designed PostgreSQL schemas for vehicles, vehicle images, customer leads, and admin users with Drizzle ORM.',
      'Added validated inquiry workflows with Zod and a protected dashboard for managing inventory, images, and sales leads.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle', 'Zod'],
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
      'Automated Playwright and TypeScript runner verifying HTTP status codes, capturing mobile/desktop screenshots, and archiving logs to AWS S3.',
    problem:
      'Manually checking responsive layouts, lead forms, and script tags across dozens of commercial dealership sites after updates is time-consuming and error-prone.',
    architecture: [
      'Engineered an automated browser runner using TypeScript and Playwright to audit URLs across desktop (1440px) and mobile (390px) viewports.',
      'Added automated checks for HTTP 200 responses, broken asset links, and presence of critical GTM/GA4 tracking tags.',
      'Configured automated JSON report and screenshot uploads to an AWS S3 bucket triggered via GitHub Actions.',
    ],
    stack: ['TypeScript', 'Playwright', 'AWS S3', 'GitHub Actions'],
    repoUrl: 'https://github.com/andcoding',
    status: 'In Progress',
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}