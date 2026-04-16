import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!, {
  onCaughtError(error, errorInfo){
    if (error instanceof Error)console.log("An error was handled by Error Boundary: ", error.message)
    console.log("ComponentStack: ", errorInfo.componentStack)
  },

  onUncaughtError(error, errorInfo) {
    if (error instanceof Error) console.log("An error occured and wasn't handled", error.message)
    console.log("ComponentStack: ", errorInfo.componentStack)
  },
}).render(
  <ErrorBoundary>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>,
)
