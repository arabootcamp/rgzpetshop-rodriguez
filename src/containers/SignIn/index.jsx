import React, { useState } from "react";
import "./styles.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { emailExpReg } from "../../utils/regExp";
import { useForm } from "../../hooks/useForm";
import { signinService } from "../../service/signinService";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.email.trim() || !emailExpReg.test(form.email.trim()))
    errors.email =
      "El campo email es requerido, ingrese formato (ejm: algunnombre@dominio.com).";
  if (!form.password.trim()) errors.password = "Debe ingresar una contraseña.";
  return errors;
};

const SignIn = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="">
      <Container fluid className="my-5">
        <Row>
          <Col lg="6" className="">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="pc"
            />
          </Col>
          <Col lg="6" className="my-auto">
            <h2>Iniciar Sesión</h2>
            <Form className="mt-3 text-start" action="" method="">
              <Form.Group className="mb-2" controlId="formLoginEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  placeholder="email"
                  className="rounded-0"
                  autoFocus
                />
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.email ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.email} `}</span>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formLoginPassword">
                <div className="d-flex">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.password}
                    placeholder="contraseña"
                    className="rounded-0"
                  />
                  <Button
                    className="rounded-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </Button>
                </div>
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.password ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.password} `}</span>
                </Form.Text>
              </Form.Group>

              <div className="text-start">
                <Button variant="primary" type="submit" className="rounded-0">
                  Iniciar sesión
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  No tienes cuenta?
                  <Link to="/signup" className="ms-2 text-danger">
                    Registrarse
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
