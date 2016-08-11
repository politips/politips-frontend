import './app.scss';
import 'jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(
  combineReducers({
    auth: authReducer,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

console.log('store', store);
const history = syncHistoryWithStore(browserHistory, store)

import App from './components/app';
import Login from './components/login';
import About from './components/about';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))

