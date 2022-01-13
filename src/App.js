import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/rooms'>
          <Rooms />
        </Route>
        <Route exact path='/singlerooms/:slug'>
          <SingleRoom />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default App
