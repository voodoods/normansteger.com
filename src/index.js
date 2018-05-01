import React from 'react'
import ReactDOM from 'react-dom'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import './index.css'

import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import Skills from './skills/Skills'
import Imprint from './imprint/Imprint'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <div className="wrapper pure-g">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/imprint" component={Imprint} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById('root')
)
