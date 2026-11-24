import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

// Pre-render all case study routes at build time
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamically set the browser title and meta description per project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Yordy Martinez' };
  }

  return {
    title: `${project.title} | Yordy Martinez`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="jigsaw-background min-h-screen text-[var(--foreground)] selection:bg-[var(--accent)]/30">
      {/* Top Bar */}
      <header className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between border-b border-zinc-800/80">
        <Link
          href="/#projects"
          className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
        >
          ← Back to Projects
        </Link>
        <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
          {project.status}
        </span>
      </header>

      {/* Case Study Content */}
      <main className="max-w-3xl mx-auto px-6 py-14 space-y-12">
        <section className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-secondary)]">
            {project.category}
         </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
                    {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-secondary)] transition"
          >
            Live Demo ↗
          </a>
        )}

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:border-[var(--accent)] transition"
        >
          View Source Code ↗
        </a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-3 border-t border-zinc-800/80 pt-8">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-3 border-t border-zinc-800/80 pt-8">
          <h2 className="text-xl font-semibold text-zinc-100">The Challenge</h2>
          <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
        </section>

        {/* Architecture & Implementation */}
        <section className="space-y-4 border-t border-zinc-800/80 pt-8">
          <h2 className="text-xl font-semibold text-zinc-100">
            Architecture & Implementation
          </h2>
          <ul className="space-y-3 text-zinc-300">
            {project.architecture.map((point, index) => (
              <li key={index} className="flex items-start gap-3 leading-relaxed">
                <span className="font-mono text-xs text-[var(--accent-secondary)] mt-1.5">0{index + 1}</span>
                <span className="text-zinc-400">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}