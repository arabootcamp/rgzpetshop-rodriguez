import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw,faSignIn} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import { firstLetterUpperCase } from '../../utils/customFunctions';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

const NavBar = () => {

  const { categories } = useContext(CategoriesContext);

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

              {categories.map(el => (<Link to={`/category/${el.name}`} className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`} key={`category-${el.id}`}>{firstLetterUpperCase(el.name)} <span className="d-none d-lg-inline ps-2">|</span></Link>))}

              <Link to='/' className={`my-1 my-lg-0 ms-lg-auto ${styles.navbar__link} d-flex align-items-center`} >Login
                <FontAwesomeIcon icon={faSignIn} /></Link>
              <CartWidget className="my-1 my-lg-0" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;