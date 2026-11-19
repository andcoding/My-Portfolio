import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

export default function HomePage() {
  return (
    <div className="jigsaw-background min-h-screen text-[var(--foreground)] selection:bg-[var(--accent)]/30;">
      {/* Top Navigation */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between border-b border-zinc-800/80">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight text-zinc-100">
          Yordy.dev
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition">Projects</a>
          <a href="#stack" className="hover:text-zinc-100 transition">Stack</a>
          <a href="#contact" className="hover:text-zinc-100 transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Typography-Driven Hero */}
        <section className="space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-Stack & Front-End Roles
          </div> */}

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 leading-[1.15]">Yordy Martinez<br />
            <span className="block text-2xl font-size: var(--text-2xl); text-[var(--accent-secondary)] leading-none">Full Stack Web Developer</span> 
            <span className="block text-zinc-400 text-xl font-size: var(--text-1xl); leading-tight mt-2"> Building and supporting commercial websites with modern React technologies and testing with Playwright automation.</span>
          </h1>

          {/*<p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            5 years of experience developing, editing, and maintaining commercial websites using WordPress, React, Next.js, PHP, and TypeScript.
          </p>*/}

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Explore Projects
            </a>
            <a
              href="https://github.com/andcoding"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition"
            >
              GitHub (@andcoding)
            </a>
            <a
              href="https://linkedin.com/in/yordy-martinez-34693b168"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Linkedin
            </a>
          </div>
        </section>

        {/* Bento-Style Projects Grid */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Selected Engineering Work</h2>
            <p className="text-sm text-zinc-300 mt-1">Full-stack applications,TypeScript, React, Next.js, Tailwind, custom WordPress plugins, and QA automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project) => (
              <article key={project.slug}
               className="group rounded-xl bg-[var(--surface)] border border-[var(--border)] p-6 transition-transform duration-300 ease-out motion-safe:hover:scale-[1.02] motion-safe:focus-within:scale-[1.02] hover:z-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-zinc-400">{project.category}</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/80">
                      {project.status}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition mb-2">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded bg-zinc-950 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-medium">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[var(--accent-secondary)] hover:text-emerald-300 transition"
                    >
                      Read Case Study →
                    </Link>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Core Stack Matrix */}
        <section id="stack" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Technical Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {[
              { label: 'Frontend', items: 'Next.js, React, TypeScript, Tailwind' },
              { label: 'Backend & CMS', items: 'PHP, WordPress, Node.js, Python' },
              { label: 'Data & Cloud', items: 'PostgreSQL, MySQL, AWS S3, Vercel' },
              { label: 'QA & Analytics', items: 'Playwright, GA4, GTM, Yoast SEO' },
            ].map((group) => (
              <div key={group.label} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <p className="font-mono text-xs text-zinc-400 mb-1.5">{group.label}</p>
                <p className="text-zinc-200 font-medium leading-snug">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="pt-12 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-200">Get in touch</p>
            <p className="text-xs text-zinc-400">Santiago de los Caballeros, DR · US Eastern Time</p>
          </div>
          <a
            href="mailto:noelnew90@gmail.com"
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition"
          >
            noelnew90@gmail.com
          </a>
        </footer>
      </main>
    </div>
  );
}