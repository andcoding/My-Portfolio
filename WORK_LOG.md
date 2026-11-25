# Work Log

## 2026-11-23

### Scope

Restructured the portfolio for interview and recruiter use. The implementation adds a black, reference-inspired WebGL flow background at the top and in the contact area, integrates the four project images, and adds commercial automotive support and services content.

### Repository Review

- Inspected `AGENTS.md`.
- Inspected `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `app/projects/[slug]/page.tsx`, `lib/projects.ts`, `package.json`, and `next.config.ts`.
- Confirmed that Next.js App Router project-detail routes are generated from `lib/projects.ts`.
- Confirmed that the four project images are 640x480 JPEG files in `public/`.

### Implemented

- Installed `ogl` for the WebGL shader.
- Added `components/shaders/flow-shader.tsx`.
- Added a dark, grayscale shader to the homepage hero and a smaller footer shader.
- Added viewport, tab visibility, reduced-motion, static fallback, resize, and WebGL cleanup behavior.
- Updated the global palette to a predominantly black theme.
- Expanded the flow-shader motion area and increased the white tonal range to resemble the reference more closely.
- Increased the low-frequency pattern scale and high-color brightness for a broader, more visible monochrome moving effect.
- Replaced the hero-local shader container with a page-level 900px full-width backdrop matching the reference repo positioning.
- Reduced shader brightness and broadened the radial fade while preserving black as the dominant page color.
- Increased the shader brightness by approximately 30% while retaining the broad, black-dominant radial fade.
- Added a working black/light theme toggle with persisted `next-themes` state, a circular view-transition reveal, and shader background synchronization.
- Reduced top and footer shader brightness by approximately 15%.
- Temporarily commented out the top and footer OGL shader markup while preserving its settings and implementation.
- Temporarily commented out GitHub, LinkedIn, and email links on the homepage and GitHub source link on project details; retained project repository data and theme switching.
- Set light mode as the default theme and restyled dealership website links as prominent, keyboard-accessible buttons.
- Restructured the homepage with projects, commercial support, services, technical stack, and contact sections.
- Added Dave Sinclair Ford, Future Ford Lincoln of Roseville, Hacienda Nissan, and the supplied dealership support links.
- Added Google Tag Manager, Google Analytics, FTP, PageSpeed, Yoast, navigation maintenance, WordPress, and QA service language.
- Added project image metadata to `lib/projects.ts`.
- Added Next.js `Image` rendering for all four project cards.

### Project Image Mapping

- `HomeGoodsEcommerce.jpeg` -> Scalable Home Goods Ecommerce Platform
- `Dealership Inventory.png` -> Dealership Inventory & Lead Platform
- `CRM Pipeline & Dashboard Medium.jpeg` -> CRM Pipeline & KPI Dashboard
- `Cross-Device QA & Uptime.jpeg` -> Cross-Device QA & Uptime Monitor

The final CRM/QA image mapping should be confirmed if the two dashboard previews are intended for different projects.

### Verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed.
- Desktop visual inspection: top flow area and homepage hierarchy verified.
- Mobile visual inspection: navigation and hero verified at a 390px browser viewport; no page-width overflow was reported.
- Project cards and project-detail routes: all four project image entries rendered and all existing static routes generated.
- External URL check: Dave Sinclair Ford and multiple supplied sites returned HTTP 200 or 403 depending on bot protection. A 403 does not confirm the URL is invalid; browser access may still succeed.
- Browser console: only Next.js preload/dev-tool warnings were observed; no application runtime error was found.

### Known Limitations

- External dealership pages were not visually audited during implementation.
- Hacienda Nissan has no supplied public URL, so no link was invented.
- Project metrics and customer testimonials were not invented.
- The two similarly named CRM dashboard images should be visually confirmed against their intended project cards.
