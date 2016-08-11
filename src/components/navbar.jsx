import React from 'react'
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
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title='My Account' eventKey={3}>
              <LinkContainer to={'/login/'}>
                <MenuItem>Login</MenuItem>
              </LinkContainer>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </RBNavbar.Collapse>
      </RBNavbar>
    )
  }
})

export default Navbar;

