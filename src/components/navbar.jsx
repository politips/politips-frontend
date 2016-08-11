import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import { Navbar as RBNavbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Navbar = React.createClass({
  render() {
    return (
      <RBNavbar inverse>
        <RBNavbar.Header>
          <RBNavbar.Brand>
            <Link to={'/'}>Politips</Link>
          </RBNavbar.Brand>
        </RBNavbar.Header>
        <RBNavbar.Collapse>
          <Nav>
            <LinkContainer to={'/about/'}>
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavDropdown id="accountDropdown" title={this.props.user ? this.props.user.username : 'My Account'}>
            { this.props.user ? (
              <LinkContainer to={'/logout/'}>
                <MenuItem>Logout</MenuItem>
              </LinkContainer>
            ) : (
              <LinkContainer to={'/login/'}>
                <MenuItem>Login</MenuItem>
              </LinkContainer>
            ) }
            </NavDropdown>
          </Nav>
        </RBNavbar.Collapse>
      </RBNavbar>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    "user": state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
