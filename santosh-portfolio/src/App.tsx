import { Navbar, Footer } from './components/Layout'
import { Hero, About, Skills, Experience, Projects, Resume, Contact } from './sections/Portfolio'
import './styles/main.scss'
export default function App() { return <><a className='skip-link' href='#main'>Skip to content</a><Navbar /><main id='main'><Hero /><About /><Skills /><Experience /><Projects /><Resume /><Contact /></main><Footer /></> }
