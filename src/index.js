import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/purecss/build/pure-min.css'
import '../node_modules/purecss/build/grids-responsive-min.css'
import './index.css'

import Header from './header/Header'
import Home from './home/Home'
import Skills from './skills/Skills'

import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <div className="wrapper pure-g">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
registerServiceWorker()
