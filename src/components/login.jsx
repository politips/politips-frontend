import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { login } from '../actions';

const Login = React.createClass({
  getInitialState() {
    return {
      'username': '',
      'password': ''
    }
  },

  setUsername(e) {
    this.setState({'username': e.target.value});
  },
  setPassword(e) {
    this.setState({'password': e.target.value});
  },

  submit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password).then(() => {
      if (this.props.user) {
        this.props.router.push('/home');
      }
    });
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="well">
              <form onSubmit={this.submit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={this.state.username} onChange={this.setUsername}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" value={this.state.password} onChange={this.setPassword}/>
                </div>
                <div>
                  <button disabled={this.props.isLoggingIn} type='submit' className='btn btn-primary'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return state.auth;
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(login(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
