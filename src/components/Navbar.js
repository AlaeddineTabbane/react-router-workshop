import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='categories'>Categories</Link>
            <Link className="nav-link" to='login'>Login</Link>
            <Link className="nav-link" to='profile'>Profile</Link>
            <Link className="nav-link" to='products'>Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
