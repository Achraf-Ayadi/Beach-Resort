import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RoomsProvider } from './context/roomsContext'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <RoomsProvider>
      <Router>
        <App />
      </Router>
    </RoomsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
