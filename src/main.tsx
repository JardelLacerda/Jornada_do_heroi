import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from './contexts/apiContext.tsx'
import { ServicesProvider } from './contexts/ServicesFigthersContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </ApiProvider>
  </React.StrictMode>,
)
