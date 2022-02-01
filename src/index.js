import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RoomsProvider } from './context/roomsContext'
import { FilterProvider } from './context/filterContext'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <RoomsProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </RoomsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
