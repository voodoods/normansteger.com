import React from 'react'
import ReactDOM from 'react-dom'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import './index.css'

import Header from './components/header/'
import Footer from './components/footer/'

import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Imprint from './pages/imprint/Imprint'
import Cv from './pages/curriculum-vitae/Cv'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <div className="wrapper pure-g">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/imprint" component={Imprint} />
        <Route exact path="/cv" component={Cv} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById('root')
)
