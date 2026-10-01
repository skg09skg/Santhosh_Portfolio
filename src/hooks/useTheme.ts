import { useSyncExternalStore } from 'react'
import { initialTheme, type Theme } from '../utils/theme'

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}
function subscribe(callback: () => void) {
  window.addEventListener('portfolio-theme-change', callback)
  return () => window.removeEventListener('portfolio-theme-change', callback)
}
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, currentTheme, initialTheme)
  function toggle() {
    const next: Theme = currentTheme() === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      /* Storage is optional. */
    }
    window.dispatchEvent(new Event('portfolio-theme-change'))
  }
  return { theme, toggle }
}
