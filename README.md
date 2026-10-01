# Santosh Kumar portfolio

The React + TypeScript + Vite application lives in `santosh-portfolio/`.

```sh
cd santosh-portfolio
npm install
npm run dev
```

Run `npm run build` for production and `npm run lint` for source checks. On Windows with restricted PowerShell script policy, use `npm.cmd`.

## Personalize

- Add your email, LinkedIn, GitHub, and employment dates in `src/config/profile.ts`.
- Place your actual resume at `public/resume/Santosh-Kumar-Resume.pdf`, then set `resumeAvailable: true` in that config. No resume is fabricated.
- Update `src/data/projects.ts` with approved screenshots and public links. Keep company information public-safe.
- Edit skill categories in `src/data/skills.ts`.
- Once the production domain is known, add canonical and Open Graph URL metadata in `index.html`, generate a sitemap, and reference it in `public/robots.txt`.

The site uses native section anchors. React Router, Ant Design, and Ant Design icons are installed as requested, ready for future use. Current UI uses custom components, Lucide icons, and reduced-motion-aware Framer Motion. Missing contact links and resume display pending states. Theme preferences persist in localStorage when available.
