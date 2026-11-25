import Image from 'next/image';
import Link from 'next/link';
// import { FlowShader } from '@/components/shaders/flow-shader';
import { ThemeToggle } from '@/components/theme-toggle';
import { PROJECTS } from '@/lib/projects';

const maintainedSites = [
  ['Shults Ford Wheeling', 'https://www.shultsfordwheeling.com/'],
  ['Washington Ford', 'https://www.washingtonford.com/'],
  ['Woltz & Wind Ford', 'https://www.woltzwindford.com/'],
  ['Whittaker Ford', 'https://www.whittakerford.com/'],
  ['Empire Ford', 'https://www.empireford1.com/'],
  ['Ford Louisville', 'https://www.fordlouisville.net/'],
  ['BHI Ford', 'https://www.bhiford.com/'],
  ['Wapakoneta Ford', 'https://www.wapakonetaford.net/'],
  ['Rich Ford', 'https://www.rich-ford.com'],
  ['Colley Ford', 'https://www.colleyford.com/'],
  ['Hemborg Ford', 'https://www.hemborgford.net/'],
  ['Jim Burke Ford', 'https://www.jimburkeford.com/'],
] as const;

const services = [
  ['Website Development', 'WordPress, responsive layouts, custom pages, theme updates, and commercial site implementation.'],
  ['Analytics & Tracking', 'Google Tag Manager, Google Analytics 4, tag QA, reporting setup, and third-party tracking scripts.'],
  ['Integrations & Exports', 'Automotive tools, REST integrations, FTP-based exports, and backend reporting workflows.'],
  ['Ongoing Maintenance', 'Content updates, navigation and menu changes, third-party script updates, bug fixes, and live-site support.'],
  ['SEO & Performance', 'Yoast SEO setup, PageSpeed Insights audits, Core Web Vitals work, and image or layout improvements.'],
  ['QA & Automation', 'Cross-device browser testing and Playwright-based checks for forms, CTAs, layouts, and critical flows.'],
] as const;

export default function HomePage() {
  return (
    <div className="jigsaw-background min-h-screen overflow-hidden text-[var(--foreground)] selection:bg-white/20">
      {/* Temporarily disabled; keep the OGL background configuration for later.
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px] overflow-hidden"
      >
        <div className="portfolio-backdrop-fallback shader-canvas absolute inset-0 opacity-100">
          <FlowShader
            speed={[0.0, 0.1]}
            iterations={10}
            scale={6}
            brightness={1.38}
            fadeRx={3.45}
            fadeRy={0.88}
            fadeCx={0.5}
            fadeCy={0.0}
          />
        </div>
      </div>
      */}

      <header className="relative z-20 max-w-5xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight text-zinc-100">
          Yordy.dev
        </Link>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation" className="site-navigation flex items-center gap-3 text-xs sm:gap-5 sm:text-sm text-zinc-400">
            <a href="#projects" className="hover:text-zinc-500 transition">Projects</a>
            <a href="#support" className="hover:text-zinc-500 transition">Experience</a>
            <a href="#services" className="hover:text-zinc-500 transition">Services</a>
            <a href="#stack" className="hidden sm:inline hover:text-zinc-500 transition">Stack</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6">
        <section className="relative isolate min-h-[520px] flex items-center py-20">
          <div className="max-w-3xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">Web Developer</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-[0.98]">
              Yordy
            </h1>
            <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-zinc-300">
              I build and support commercial websites, from responsive front-end experiences to analytics, integrations, QA, and ongoing maintenance.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-white transition">
                Explore Projects
              </a>
              {/* <a href="https://github.com/andcoding" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg border border-white/15 bg-black/40 text-zinc-100 text-sm font-semibold hover:border-white/40 transition">
                GitHub (@andcoding)
              </a> */}
              {/* <a href="https://linkedin.com/in/yordy-martinez-34693b168" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-lg border border-white/15 bg-black/40 text-zinc-100 text-sm font-semibold hover:border-white/40 transition">
                LinkedIn
              </a> */}
            </div>
          </div>
        </section>

        <div className="space-y-24 pb-24">
          <section id="projects" className="scroll-mt-8 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">Engineering work</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Selected Projects</h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-2xl">Full-stack applications, custom WordPress work, dealership platforms, reporting, and QA automation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PROJECTS.map((project, index) => (
                <article key={project.slug} className="group overflow-hidden rounded-2xl bg-[var(--surface)] border border-white/10 transition-transform duration-300 motion-safe:hover:-translate-y-1">
                  <Link href={`/projects/${project.slug}`} className="block focus-visible:outline-none">
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 520px"
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>
                  <div className="p-5 min-h-[230px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-mono text-zinc-500">{project.category}</span>
                        <span className="px-2 py-1 rounded bg-white/[0.06] text-zinc-300 border border-white/10">{project.status}</span>
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition mb-2">{project.title}</h3>
                      </Link>
                      <p className="text-sm text-zinc-400 leading-relaxed">{project.summary}</p>
                    </div>
                    <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                      <Link href={`/projects/${project.slug}`} className="text-zinc-200 hover:text-white transition">Read Case Study →</Link>
                      {/* <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition">GitHub ↗</a> */}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="support" className="scroll-mt-8 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">Commercial experience</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Ongoing Website Support</h2>
              <p className="text-sm text-zinc-400 mt-2 max-w-3xl">Front-end implementation, live-site maintenance, integrations, reporting, performance, SEO, and cross-device quality assurance for active commercial websites.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 space-y-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500">Landing page development</p>
                  <h3 className="text-xl font-semibold mt-2">Dave Sinclair Ford</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">Developed and launched a Commercial Fleet landing page using theme templates and brand guidelines.</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Custom content containers and responsive media</li>
                  <li>Commercial lead CTA integrations</li>
                  <li>Desktop, tablet, and mobile breakpoint QA</li>
                  <li>Typography, spacing, and button alignment review</li>
                </ul>
                <a href="https://www.davesinclairford.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400">Visit website <span aria-hidden="true">↗</span></a>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 space-y-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500">Navigation & integrations</p>
                  <h3 className="text-xl font-semibold mt-2">Future Ford Lincoln of Roseville</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">Restructured an active dealership platform and verified third-party lead and valuation integrations.</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Primary navigation restructuring</li>
                  <li>Value My Vehicle lead form integration</li>
                  <li>Kelley Blue Book CTA script implementation</li>
                  <li>Desktop/mobile form and script verification</li>
                </ul>
                <a href="https://www.futureford.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400">Visit website <span aria-hidden="true">↗</span></a>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 space-y-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500">Front-end maintenance</p>
                  <h3 className="text-xl font-semibold mt-2">Hacienda Nissan</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">Collaborated on front-end development and ongoing technical maintenance of an active dealership website.</p>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>Jellybean vehicle navigation rebuild</li>
                  <li>Primary navigation and SRP refactoring</li>
                  <li>Third-party automotive tool integrations</li>
                  <li>Cross-device formatting and QA review</li>
                </ul>
                <a href="https://www.haciendanissan.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400">Visit website <span aria-hidden="true">↗</span></a>
              </article>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                <div>
                  <p className="font-mono text-xs text-zinc-500">Commercial dealership support</p>
                  <h3 className="text-xl font-semibold mt-2">Additional maintained websites</h3>
                </div>
                <p className="text-xs text-zinc-500">Selected collaboration and maintenance portfolio</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {maintainedSites.map(([name, url]) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-white/10 px-4 py-3 text-sm text-zinc-300 hover:border-white/30 hover:text-white transition-colors">
                    {name} <span aria-hidden="true" className="text-sky-400 transition-colors group-hover:text-sky-300">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                'GTM tags',
                'GA4 reporting',
                'FTP exports',
                'Yoast SEO',
                'PageSpeed audits',
                'Navigation updates',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-[var(--surface)] px-3 py-4 text-sm text-zinc-300 text-center">{item}</div>
              ))}
            </div>
          </section>

          <section id="services" className="scroll-mt-8 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">What I provide</p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(([title, description], index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1"
                >
                  <p className="font-mono text-xs text-zinc-600 mb-4">0{index + 1}</p>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="scroll-mt-8 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Technical Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {[
                ['Frontend', 'Next.js, React, TypeScript, JavaScript, Tailwind CSS'],
                ['CMS & Backend', 'WordPress, WooCommerce, PHP, MySQL'],
                ['Analytics', 'Google Tag Manager, Google Analytics 4'],
                ['SEO & Performance', 'Yoast SEO, PageSpeed Insights'],
                ['QA & Automation', 'Playwright, browser developer tools'],
                ['Integrations & Infrastructure', 'REST APIs, FTP exports, AWS S3, GitHub Actions, Vercel'],
              ].map(([label, items]) => (
                <div key={label} className="p-5 rounded-xl bg-[var(--surface)] border border-white/10">
                  <p className="font-mono text-xs text-zinc-500 mb-2">{label}</p>
                  <p className="text-zinc-200 leading-relaxed">{items}</p>
                </div>
              ))}
            </div>
          </section>

          <footer id="contact" className="relative isolate overflow-hidden scroll-mt-8 rounded-3xl border border-white/10 bg-black/60 px-6 py-10 sm:px-10">
            {/* Temporarily disabled; retain the footer shader settings.
            <div className="pointer-events-none absolute inset-0 -z-10 portfolio-backdrop-fallback shader-canvas opacity-80">
              <FlowShader
                speed={[0.0, 0.1]}
                brightness={0.608}
                fadeRx={1.8}
                fadeRy={0.78}
                fadeCy={0.1}
              />
            </div>
            */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-zinc-500 mb-3">Get in touch</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build and improve the web.</h2>
                <p className="text-sm text-zinc-400 mt-3">Santiago de los Caballeros, DR · US Eastern Time</p>
              </div>
              {/* <a href="mailto:noelnew90@gmail.com" className="shrink-0 px-5 py-3 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold hover:bg-white transition">
                noelnew90@gmail.com
              </a> */}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}