import { readFile, writeFile, access } from 'node:fs/promises'
import { render, profile } from '../.prerender/prerender.js'

const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  )
if (profile.resumeAvailable) await access(`dist${profile.resumePath}`)
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
}
if (profile.email) person.email = profile.email
if (profile.phone) person.telephone = profile.phone
let metadata = ''
if (!profile.website)
  console.warn(
    'Production URL is unset: canonical URL, social image URLs, and sitemap are omitted.',
  )
if (profile.website) {
  const url = new URL(profile.website)
  if (!['https:', 'http:'].includes(url.protocol))
    throw new Error('Website must be an HTTP(S) URL')
  const canonical = url.href
  person.url = canonical
  const image = new URL(
    'social-preview.png',
    canonical.endsWith('/') ? canonical : `${canonical}/`,
  ).href
  metadata += `<link rel="canonical" href="${escape(canonical)}" /><meta property="og:url" content="${escape(canonical)}" /><meta property="og:image" content="${escape(image)}" /><meta name="twitter:image" content="${escape(image)}" />`
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(canonical)}</loc></url></urlset>`,
  )
  await writeFile(
    'dist/robots.txt',
    `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', canonical.endsWith('/') ? canonical : `${canonical}/`).href}\n`,
  )
}
metadata += `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\u003c')}</script>`
const html = await readFile('dist/index.html', 'utf8')
await writeFile(
  'dist/index.html',
  html
    .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
    .replace('<!--deployment-meta-->', metadata),
)
console.log('Prerendered portfolio HTML and profile metadata.')
