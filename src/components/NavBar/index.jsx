import './styles.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw,faSignIn} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return ( 
  <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faPaw} />
            <span className="ms-3">rgzPetShow</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#alimento">Alimento</Nav.Link>
              <Nav.Link href="#farmacia">Farmacia</Nav.Link>
              <Nav.Link href="#juguetesyaccesorios">Juguetes y Accesorios</Nav.Link>
              <Nav.Link href="#login" className="ms-auto">Login <FontAwesomeIcon icon={faSignIn} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </> );
}
 
export default NavBar;