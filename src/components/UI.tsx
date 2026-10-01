import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  Download,
  Code2,
  BriefcaseBusiness,
  Moon,
  Sun,
  Mail,
} from 'lucide-react'
import { profile } from '../config/profile'
import { useTheme } from '../hooks/useTheme'

export function Button({
  href,
  children,
  secondary = false,
  download = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
  download?: boolean
}) {
  return (
    <a
      className={`button ${secondary ? 'secondary' : ''}`}
      href={href}
      download={download || undefined}
    >
      {children}
    </a>
  )
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
    </div>
  )
}

export function SocialLinks({
  includeEmail = false,
}: {
  includeEmail?: boolean
}) {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: BriefcaseBusiness },
    { label: 'GitHub', href: profile.github, Icon: Code2 },
    ...(includeEmail && profile.email
      ? [{ label: 'Email', href: `mailto:${profile.email}`, Icon: Mail }]
      : []),
  ].filter((link) => link.href)
  if (!links.length) return null
  return (
    <div className="social-links">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('https:') ? '_blank' : undefined}
          rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
        >
          <Icon size={17} aria-hidden="true" />
          {label}
          {href.startsWith('https:') && (
            <ArrowUpRight size={15} aria-hidden="true" />
          )}
        </a>
      ))}
    </div>
  )
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      className="icon-button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={19} aria-hidden="true" />
      ) : (
        <Sun size={19} aria-hidden="true" />
      )}
    </button>
  )
}

export function ResumeButton() {
  if (!profile.resumeAvailable) return null
  return (
    <Button href={profile.resumePath} download secondary>
      <Download size={17} aria-hidden="true" />
      Download resume
    </Button>
  )
}
