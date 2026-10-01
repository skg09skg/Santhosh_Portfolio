import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from './UI'
const copyrightYear = new Date().getFullYear()
const links = ['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact']
export function Navbar() {
const [open, setOpen] = useState(false)
return <header className="header"><div className="container nav"><a href="#home" className="brand" aria-label="Santosh Kumar home">sk<span>.</span></a><nav id="navigation" className={open ? 'open' : ''} aria-label="Main navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav><div className="nav-actions"><ThemeToggle /><button className="icon-button menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>
}
export function Footer() {
return <footer className="container footer"><a className="brand" href="#home">sk<span>.</span></a><p>© {copyrightYear} Santosh Kumar</p><a href="#home">Back to top <ArrowUpRight size={16} /></a></footer>
}

