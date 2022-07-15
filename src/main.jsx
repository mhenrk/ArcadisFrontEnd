import React from 'react'
import App from './components/App'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global-styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
