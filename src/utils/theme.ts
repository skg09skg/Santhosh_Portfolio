export type Theme = 'light' | 'dark'
export function initialTheme(): Theme {
  // Match the prerendered markup; sync with the head script after hydration.
  return 'light'
}
