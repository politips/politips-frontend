import './app.scss';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import About from './about';

const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

