import { ArrowDown, ArrowUpRight, Braces, Component, Layers, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../config/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { Button, ExperienceItem, ProjectCard, ResumeButton, SectionTitle, SkillBadge, SocialLinks } from '../components/UI'
export function Hero() {
const reduced = useReducedMotion()
return <section id="home" className="container hero"><motion.div initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}><span className="eyebrow hero-label"><span className="status-dot" />Frontend React.js Developer</span><h1>Santosh Kumar<span>Thoughtful interfaces.<br />Built with React.</span></h1><p className="hero-description">Frontend React.js Developer with 5+ years of experience building modern, scalable and user-focused web applications using React.js, JavaScript, TypeScript and modern frontend technologies.</p><div className="hero-buttons"><Button href="#projects">View Projects <ArrowUpRight size={18} /></Button><ResumeButton /></div><SocialLinks /></motion.div><aside className="hero-aside" aria-label="Development focus"><div className="code-top"><span /><span /><span /><small>frontend / perspective</small></div><div className="code-body"><Braces size={42} strokeWidth={1.3} /><p>Good interfaces start<br />with <em>clear thinking.</em></p><div className="code-row"><span>01</span> Reusable components</div><div className="code-row"><span>02</span> Responsive experiences</div><div className="code-row"><span>03</span> Maintainable architecture</div></div><div className="code-bottom"><span>React · TypeScript</span><span>5+ years</span></div></aside><a className="scroll-cue" href="#about"><ArrowDown size={16} />Explore my work</a></section>
}
export function About() {
return <section id="about" className="container section"><SectionTitle number="01" title="About" subtitle="Frontend first. Always user-focused." /><div className="about-grid"><p className="large-copy">I turn complex requirements into interfaces that feel <span>clear, consistent, and easy to use.</span></p><div><p>With 5+ years of frontend development experience, my focus is React.js, JavaScript, and TypeScript. I build reusable components, responsive interfaces, and API-connected experiences with thoughtful state management.</p><p>I care about modern frontend architecture, performance, and maintainability. Collaboration with design and backend teams helps connect the details of an interface to the wider product.</p><p>Supporting experience with Node.js, MongoDB, and MySQL gives me context for the APIs and services behind the frontend.</p></div></div><div className="focus-grid">{[{ Icon: Component, title: 'Reusable by design', text: 'Consistent components that support evolving interfaces.' }, { Icon: Layers, title: 'Built to maintain', text: 'Clear architecture and thoughtful state management.' }, { Icon: Braces, title: 'Connected experiences', text: 'Frontend workflows supported by reliable API integration.' }].map(({ Icon, title, text }) => <div key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></div>)}</div></section>
}
export function Skills() {
return <section id="skills" className="container section"><SectionTitle number="02" title="Skills" subtitle="The tools behind the interfaces." /><p className="section-intro">A frontend-focused toolkit, with supporting experience across APIs, backend services, and AI applications.</p><div className="skills-grid">{skills.map(group => <article key={group.name}><h3>{group.name}</h3><div className="badges">{group.items.map(skill => <SkillBadge key={skill}>{skill}</SkillBadge>)}</div></article>)}</div></section>
}
export function Experience() {
return <section id="experience" className="container section"><SectionTitle number="03" title="Experience" subtitle="Building real application experiences." /><div className="timeline"><ExperienceItem /></div></section>
}
export function Projects() {
return <section id="projects" className="container section"><SectionTitle number="04" title="Projects" subtitle="A closer look at my frontend work." /><p className="section-intro">Selected contributions, described from a frontend perspective. Additional project details and approved screenshots will be added here.</p><div className="projects-grid">{projects.map(project => <ProjectCard key={project.name} project={project} />)}</div></section>
}
export function Resume() {
return <section id="resume" className="container section"><div className="resume-panel"><div><SectionTitle number="05" title="Resume" subtitle="My experience, in one place." /><p>{profile.resumeAvailable ? 'Download my resume for a closer look at my frontend experience.' : 'My resume will be available here once the document is added.'}</p></div>{profile.resumeAvailable ? <ResumeButton /> : <SkillBadge>Resume coming soon</SkillBadge>}</div></section>
}
export function Contact() {
return <section id="contact" className="container section contact"><SectionTitle number="06" title="Contact" subtitle="Let’s build something thoughtful." /><p>Have a frontend role or a React project in mind?<br />I’d welcome a conversation.</p>{profile.email ? <Button href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={18} /></Button> : <span className="contact-pending"><Mail size={18} />Contact details coming soon</span>}<SocialLinks /></section>
}
