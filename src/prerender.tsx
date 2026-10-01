import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
export { profile } from './config/profile'
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
