# Santosh Kumar Portfolio

A React and TypeScript portfolio with responsive layouts, light and dark themes, accessible navigation, and HTML prerendered at build time. Projects appear immediately after the hero, followed by Experience; missing personal details are hidden rather than displayed as placeholders.

## Development

Use Node.js compatible with Vite 8 (20.19+ or 22.12+) and npm.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run format:check
npm run build
npm run preview
```

The build type-checks the app, bundles the client, builds a temporary server renderer in `.prerender/`, and writes the rendered content and Person structured data into `dist/index.html`. Deploy `dist/` to a static host at the domain root. No server runtime is needed. The head script applies the saved or system theme before the page paints; React hydrates the existing HTML.

## Updating content

- `src/config/profile.ts`: name, contact URLs, location, time zone, work preferences, website, and resume availability. Empty optional fields are omitted. Email, LinkedIn, GitHub, Bengaluru location, and IST time zone are configured from the supplied details and resume.
- `src/data/experience.ts`: roles, verified dates, public product descriptions, and contributions. AIRI Lab (Jul 2025-present), Promena (Sep 2021-Jul 2025), and client contributions are based on the supplied resume.
- `src/data/projects.ts`: the featured AIRIlab product and client projects from the resume, with frontend contributions and technologies.
- `src/data/skills.ts`: skills and groupings. Confirm proficiency and remove anything that does not reflect actual experience.
- The supplied PDF is at `public/resume/Santosh-Kumar-Resume.pdf`, with `resumeAvailable` enabled. Replace this file when updating the resume. The build checks that the file exists before allowing a download link.
- `website` is configured as `https://santhosh-portfolio-three-sand.vercel.app/`. The build generates the canonical link, Open Graph URL/image, Twitter image, sitemap, and robots sitemap reference. Update this setting if the public domain changes.
- `public/social-preview.png` is the share image. Update it and `index.html` metadata if the name or professional title changes.

## Structure

`src/sections/Portfolio.tsx` contains page sections; `src/components/` contains navigation and UI controls; `src/styles/main.scss` contains layout, theme tokens, focus styles, and reduced-motion rules. Animation uses CSS without a motion library. The project summaries are separate from employment history; the resume is a download from the hero.

## Before sharing

Content is aligned with the supplied Santosh_Kumar_G.pdf; dates and outcomes are self-reported from that document. Confirm the desired work arrangement. Rebuild and redeploy when changing content or the public domain. Avoid publishing confidential product screenshots or invented outcomes. The browser verifier from the original placeholder site was removed because it required an uninstalled test dependency and asserted obsolete content.
