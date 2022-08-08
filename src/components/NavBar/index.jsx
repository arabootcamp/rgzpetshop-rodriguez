import React from "react";
import styles from "./styles.module.scss";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget";
import CategoriesMenu from "../CategoriesMenu";

const NavBar = () => {
  const stopClickPropagation = (event) => event.stopPropagation();

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="p-3 shadow">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faPaw} />
            <span className="ms-3">rgzPetShop</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100">
              <Link
                to="/"
                className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}
              >
                Home <span className="d-none d-lg-inline ps-2">|</span>
              </Link>
              <CategoriesMenu />

              <NavDropdown
                title="Iniciar sesión"
                id="basic-nav-dropdown"
                className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-auto d-flex align-items-center bg-primary`}
              >
                <NavDropdown.Item
                  as={Link}
                  to={"/signin"}
                  onClick={stopClickPropagation}
                >
                  Iniciar sesión
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/signup"}
                  onClick={stopClickPropagation}
                >
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>

              <Link
                to="/ordersearch"
                className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center`}
              >
                Ordenes <span className="d-none d-lg-inline ps-2">|</span>
              </Link>
              <CartWidget className="my-1 my-lg-0" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
