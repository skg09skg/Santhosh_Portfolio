export type Theme = 'light' | 'dark'
export function initialTheme(): Theme {
try { const saved = localStorage.getItem('portfolio-theme'); if (saved === 'light' || saved === 'dark') return saved } catch { /* Storage unavailable. */ }
return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
