import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/app.scss'
import App from './js/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
