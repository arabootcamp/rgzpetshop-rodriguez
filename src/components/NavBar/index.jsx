import styles from './styles.module.scss';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw,faSignIn} from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {

  return ( 
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="p-3 shadow">
        <Container>
          <Link to='/' className='text-white text-decoration-none'>
            <FontAwesomeIcon icon={faPaw} />
            <span className="ms-3">rgzPetShow</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <Link to='/' className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}>Home <span className="d-none d-lg-inline ps-2">|</span></Link>
              <Link to='/category/electronics' className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}>Electronics <span className="d-none d-lg-inline ps-2">|</span></Link>
              <Link to='/category/jewelery' className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}>Jewelery <span className="d-none d-lg-inline ps-2">|</span></Link>
              <Link to="/category/men's clothing" className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}>Men's clothing <span className="d-none d-lg-inline ps-2">|</span></Link>
              <Link to="/category/women's clothing" className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}>Women's clothing <span className="d-none d-lg-inline ps-2">|</span></Link>
              <Link to='/' className={`my-1 my-lg-0 ms-lg-auto ${styles.navbar__link} d-flex align-items-center`} >Login <FontAwesomeIcon icon={faSignIn} /></Link>
              <CartWidget className="my-1 my-lg-0"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </> 
);
}
 
export default NavBar;