import React from 'react'

import { Thing } from 'bit-ui-wise'
import 'bit-ui-wise/dist/index.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Pages
import Team1 from './Pages/Team1'
import Team2 from './Pages/Team2'
import Team3 from './Pages/Team3'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <h1>This is the UI library</h1>
          </Route>
          <Route path='/team1'>
            <Team1 />
          </Route>
          <Route path='/team2'>
            <Team2 />
          </Route>
          <Route path='/team3'>
            <Team3 />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
