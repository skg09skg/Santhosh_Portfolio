import type { ReactNode } from 'react'
import { ArrowUpRight, Download, Code2, BriefcaseBusiness, Moon, Sun } from 'lucide-react'
import { profile } from '../config/profile'
import { useTheme } from '../hooks/useTheme'
import type { Project } from '../data/projects'
export function Button({ href, children, secondary = false, download = false }: { href: string; children: ReactNode; secondary?: boolean; download?: boolean }) {
return <a className={`button ${secondary ? 'secondary' : ''}`} href={href} download={download || undefined}>{children}</a>
}
export function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
return <div className="section-title"><span className="eyebrow">{number} / {title}</span><h2>{subtitle || title}</h2></div>
}
export function SkillBadge({ children }: { children: ReactNode }) { return <span className="badge">{children}</span> }
export function SocialLinks() {
return <div className="social-links">{[{ label: 'LinkedIn', href: profile.linkedin, Icon: BriefcaseBusiness }, { label: 'GitHub', href: profile.github, Icon: Code2 }].map(({ label, href, Icon }) => href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer"><Icon size={17} />{label}<ArrowUpRight size={15} /></a> : <span key={label} className="pending"><Icon size={17} />{label}<small>Coming soon</small></span>)}</div>
}
export function ThemeToggle() {
const { theme, toggle } = useTheme()
return <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>{theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}</button>
}
export function ResumeButton() {
return profile.resumeAvailable ? <Button href={profile.resumePath} download secondary><Download size={17} />Download Resume</Button> : <Button href="#resume" secondary><Download size={17} />Resume details</Button>
}
export function ProjectCard({ project }: { project: Project }) {
return <article className="project-card"><div className="project-preview">{project.screenshot ? <img src={project.screenshot} alt={project.screenshotAlt || `${project.name} interface`} loading="lazy" /> : <div className="preview-placeholder"><span>AIRI / AI</span><p>Application screenshot pending</p><small>Public-safe overview</small></div>}</div><div className="project-content"><span className="eyebrow">{project.role}</span><h3>{project.name}</h3><p>{project.description}</p><div className="badges">{project.technologies.map(item => <SkillBadge key={item}>{item}</SkillBadge>)}</div><h4>Frontend contribution</h4><ul>{project.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><div className="social-links">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} /></a>}{!project.github && !project.demo && <small>Public project links have not been provided.</small>}</div></div></article>
}
export function ExperienceItem() {
return <article className="experience-item"><div><span className="eyebrow">{profile.employmentPeriod}</span><h3>AIRI / AIRI Lab</h3><SkillBadge>Frontend development</SkillBadge></div><div><h3>Frontend Developer</h3><p>Building React.js and TypeScript interfaces for complex application workflows.</p><ul><li>Develop reusable components and responsive UI with maintainable frontend architecture.</li><li>Integrate APIs and manage application state with Redux and related patterns.</li><li>Contribute to AI-related frontend experiences and collaborate with backend/API teams.</li><li>Focus on application performance, interface clarity, and maintainability.</li></ul></div></article>
}

