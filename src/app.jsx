import './app.scss';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/app';
import About from './components/about';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

