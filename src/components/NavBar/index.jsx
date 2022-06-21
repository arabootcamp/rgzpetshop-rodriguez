import styles from './styles.module.scss';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw,faSignIn} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return ( 
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="p-3 shadow rounded">
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faPaw} />
            <span className="ms-3">rgzPetShow</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <Nav.Link href="#home" className={styles.navbar__link}>Home <span className="d-none d-lg-inline">|</span></Nav.Link>
              <Nav.Link href="#alimento" className={styles.navbar__link}>Alimento <span className="d-none d-lg-inline">|</span></Nav.Link>
              <Nav.Link href="#farmacia" className={styles.navbar__link}>Farmacia <span className="d-none d-lg-inline">|</span></Nav.Link>
              <Nav.Link href="#juguetesyaccesorios" className={styles.navbar__link}>Juguetes y Accesorio <span className="d-none d-lg-inline">|</span></Nav.Link>
              <Nav.Link href="#login" className={`ms-lg-auto ${styles.navbar__link}`} >Login <FontAwesomeIcon icon={faSignIn} /></Nav.Link>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </> 
);
}
 
export default NavBar;