import './app.scss';
import 'jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, Redirect} from 'react-router'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {persistStore, autoRehydrate} from 'redux-persist'

const store = createStore(
  combineReducers({
    auth: authReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

persistStore(store, {
  "whitelist": ['auth']
});

window.store = store;
const history = syncHistoryWithStore(browserHistory, store)

import App from './components/app';
import Login from './components/login';
import About from './components/about';
import Home from './components/home';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="/home"/>
      <Route path="/" component={App}>
        <Route path="home"  component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))

