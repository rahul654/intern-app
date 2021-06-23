import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Home from './Components/Home'
import PageOne from './Components/PageOne'
import PageTwo from './Components/PageTwo'

class App extends Component  {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/page1" exact component={PageOne} />
            <Route path="/page2" exact component={PageTwo} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
