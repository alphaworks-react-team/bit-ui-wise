import React from 'react'

import { Thing } from 'bit-ui-wise'
import 'bit-ui-wise/dist/index.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <h1>This is the UI library</h1>
          </Route>
          <Route path='/team1'>
            <h1>im for team 1</h1>
          </Route>
          <Route path='/team2'>
            <h1>im for team 2</h1>
          </Route>
          <Route path='/team3'>
            <h1>im for team 3</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
