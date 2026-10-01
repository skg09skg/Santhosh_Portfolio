import { ArrowDown, Mail, Phone } from 'lucide-react'
import { profile } from '../config/profile'
import { experience } from '../data/experience'
import { clientProjects, featuredProject } from '../data/projects'
import { skills } from '../data/skills'
import {
  Button,
  ResumeButton,
  SectionTitle,
  SocialLinks,
} from '../components/UI'

export function Hero() {
  const locationParts = profile.location.split(',').map((part) => part.trim())
  const shortLocation =
    locationParts.length > 1
      ? `${locationParts[0]}, ${locationParts.at(-1)}`
      : profile.location
  const details = [shortLocation, profile.timeZone.split('(')[0].trim()].filter(
    Boolean,
  )
  return (
    <section id="home" className="container hero">
      <div className="hero-content">
        <span className="eyebrow">5+ years of frontend experience</span>
        <h1>{profile.name}</h1>
        <p className="hero-tagline">{profile.title}</p>
        <ul className="badges core-technologies" aria-label="Core technologies">
          {['React.js', 'TypeScript', 'JavaScript'].map((technology) => (
            <li className="badge" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <p className="hero-description">
          Frontend ownership and team leadership.
        </p>
        {details.length > 0 && (
          <p className="hero-location">{details.join(' | ')}</p>
        )}
        <div className="hero-buttons">
          <Button href="#projects">
            View projects <ArrowDown size={18} aria-hidden="true" />
          </Button>
          <ResumeButton />
        </div>
        <SocialLinks includeEmail />
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="container section">
      <SectionTitle title="About" />
      <div className="about-copy">
        <p>
          I helped build AIRIlab's frontend from scratch at Promena and now work
          directly with AIRI Lab. The platform lets architects and designers
          turn sketches and floor plans into visualizations, edit images, and
          generate video.
        </p>
        <p>
          At Promena, I progressed from intern to leading 6-8 frontend
          developers delivering applications for US, UK, and Indian clients. My
          work included architecture, code reviews, mentoring, and release
          readiness.
        </p>
        <p>
          I hold a B.Sc. in Computer Science from Vijayanagara Sri
          Krishnadevaraya University (VSKU), Ballari, Karnataka.
        </p>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="container section">
      <SectionTitle title="Skills" />
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.name}>
            <h3>{group.name}</h3>
            <ul className="badges">
              {group.items.map((skill) => (
                <li className="badge" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="container section">
      <SectionTitle title="Experience" />
      <div className="timeline">
        {experience.map((item) => (
          <article className="experience-item" key={item.company + item.role}>
            <div>
              {item.period && <span className="eyebrow">{item.period}</span>}
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <p>{item.location}</p>
            </div>
            <div>
              <p>{item.description}</p>
              <ul>
                {item.contributions.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="container section">
      <SectionTitle title="Projects" />
      <article className="featured-project">
        <div>
          <span className="eyebrow">Featured product</span>
          <h3>{featuredProject.name}</h3>
          <p>{featuredProject.description}</p>
          <p className="project-context">{featuredProject.role}</p>
          <ul className="badges" aria-label="AIRIlab technologies">
            {featuredProject.technologies.map((technology) => (
              <li className="badge" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Frontend contributions</h4>
          <ul>
            {featuredProject.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </div>
      </article>
      <p className="project-intro">Client projects delivered at Promena</p>
      <div className="project-grid">
        {clientProjects.map((project) => (
          <article className="project-summary" key={project.name}>
            <h3>{project.name}</h3>
            <p className="project-context">{project.location}</p>
            <p>{project.description}</p>
            <ul className="badges" aria-label={`${project.name} technologies`}>
              {project.technologies.map((technology) => (
                <li className="badge" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  if (!profile.email && !profile.phone && !profile.linkedin && !profile.github)
    return null
  return (
    <section id="contact" className="container section contact">
      <SectionTitle title="Contact" />
      <p>
        I am seeking remote React.js and frontend opportunities with
        international and product companies.
      </p>
      <p>{[profile.location, profile.timeZone].filter(Boolean).join(' | ')}</p>
      {profile.email && (
        <Button href={`mailto:${profile.email}`}>
          <Mail size={18} aria-hidden="true" />
          {profile.email}
        </Button>
      )}
      {profile.phone && (
        <p>
          <a
            className="phone-link"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            <Phone size={18} aria-hidden="true" />
            {profile.phone}
          </a>
        </p>
      )}
      <SocialLinks />
    </section>
  )
}
