import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { GlobalProvider } from './context/GlobalContext.jsx'
import theme from './theme.jsx'
import { MessageActionButton, NavActionButton } from './components/ActionButton.jsx'
import Box from '@mui/material/Box'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
          <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>,
)


