import './app.scss';
import 'jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { createStore } from 'redux'
import authReducer from './reducers/authReducer';
console.log(authReducer);
let store = createStore(authReducer);
console.log(store);

import App from './components/app';
import Login from './components/login';
import About from './components/about';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

