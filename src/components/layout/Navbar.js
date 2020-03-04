import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top' className='navbar-navHeader'>
      <Navbar.Brand href='/' className="navbar-logo">Zeba</Navbar.Brand>
      <Navbar.Toggle className='navbar-toggle' aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='navbar-link' href='/home'style={{color:'white'}} >Home</Nav.Link>
          <Nav.Link className='navbar-link' href='/about' style={{color:'white'}} >About</Nav.Link>
          <Nav.Link className='navbar-link' href='/assigments' style={{color:'white'}} >Assigments</Nav.Link>
          <Nav.Link className='navbar-link' href='/resume' style={{color:'white'}} >Resume</Nav.Link>
          <Nav.Link className='navbar-link' href='/project' style={{color:'white'}} >Projects</Nav.Link>
          <Nav.Link className='navbar-link' href='/contact' style={{color:'white'}} >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
