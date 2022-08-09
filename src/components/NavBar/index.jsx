import React, { useState, useContext } from "react";
import styles from "./styles.module.scss";
import { Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget";
import CategoriesMenu from "../CategoriesMenu";
import {  signOutService} from "../../utils/request/signInService";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const stopClickPropagation = (event) => event.stopPropagation();
  const {user, setUser}=useContext(AuthContext);
  const [signOutAlert, setSignOutAlert] = useState(false);
  
  const handleSignOut = () => {
    signOutService().then((res) => {
      if (res === false) {
        setSignOutAlert(true);
      }
      else{
        setUser({signIn: false, email: null});
      }
    });
  };

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

              <Link
                to="/ordersearch"
                className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-auto d-flex align-items-center`}
              >
                Ordenes <span className="d-none d-lg-inline ps-2">|</span>
              </Link>
              <CartWidget className="my-1 my-lg-0" />
              {!user?.signIn ? (
                <NavDropdown
                  title="Iniciar sesión"
                  id="basic-nav-dropdown"
                  className={`${styles.navbar__link} my-1 my-lg-0 ms-lg-3 d-flex align-items-center bg-primary`}
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
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {user.signIn && (
        <>
          <div className="my-2 mx-2 d-flex justify-content-end align-items-center">
            <p className="me-3 my-0 py-0">Bienvenido {user.email}</p>
            <Button
              variant="outline-primary"
              className="py-0 px-1"
              onClick={handleSignOut}
            >
              X
            </Button>
          </div>
          <div
            className={
              signOutAlert
                ? "text-danger my-0 py-0 mx-2 d-flex justify-content-end"
                : "d-none"
            }
            style={{ fontSize: "12px" }}
          >
            Problema al deslogearse
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
