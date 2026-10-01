import { Navbar, Footer } from './components/Layout'
import {
  Hero,
  Projects,
  About,
  Skills,
  Experience,
  Contact,
} from './sections/Portfolio'
import './styles/main.scss'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
