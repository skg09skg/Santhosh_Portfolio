import { useEffect, useState } from 'react'
import { initialTheme } from '../utils/theme'
export function useTheme() {
const [theme, setTheme] = useState(initialTheme)
useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme) } catch { /* Theme still works without storage. */ } }, [theme])
return { theme, toggle: () => setTheme(value => value === 'light' ? 'dark' : 'light') }
}
