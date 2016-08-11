import React from 'react'

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

export default App;
