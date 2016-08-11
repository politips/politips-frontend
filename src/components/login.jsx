import React from 'react';

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
    console.log(this.state);
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
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Login;
