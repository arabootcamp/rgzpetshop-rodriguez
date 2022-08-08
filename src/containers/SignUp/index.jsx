import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { nameExpReg, phoneExpReg, emailExpReg } from "../../utils/regExp";
//import { signup } from "../../service/signupService";
//import Loader from "../../components/Loader";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  email2: "",
  password: "",
  password2: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.name.trim() || !nameExpReg.test(form.name.trim()))
    errors.name = "El campo nombre es requerido, ingrese al menos 1 caracter.";
  if (!form.lastname.trim() || !nameExpReg.test(form.lastname.trim()))
    errors.lastname =
      "El campo apellido es requerido, ingrese al menos 1 caracter.";
  if (!form.phone.trim() || !phoneExpReg.test(form.phone.trim()))
    errors.phone = "El campo teléfono es requerido, ingrese solo 8 números.";
  if (!form.email.trim() || !emailExpReg.test(form.email.trim()))
    errors.email =
      "El campo email es requerido, ingrese formato (ejm: algunnombre@dominio.com).";
  if (
    !form.email2.trim() ||
    !emailExpReg.test(form.email2.trim()) ||
    form.email2.trim() !== form.email.trim()
  )
    errors.email2 = "El campo email es requerido y debe ser igual al anterior.";
  if (!form.password.trim())
    errors.password = "Debe ingresar una contraseña de al menos 1 carácter.";
  if (!form.password2.trim() || form.password2.trim() !== form.password.trim())
    errors.password2 =
      "La contraseña es requerida y debe ser igual a la anterior";
  return errors;
};

const SignUp = () => {
  const {
    form,
    errors,
    //loading,
    //response,
    handleChange,
    handleBlur,
    //handleSubmit,
  } = useForm(initialForm, validationsForm);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <Container fluid className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">Registrarse</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="6">
            <Form className="mt-3 text-start" action="" method="POST">
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.name}
                  placeholder="nombre"
                  autoFocus
                />
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.name ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.name} `}</span>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  name="lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.lastname}
                  placeholder="apellido"
                />
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.lastname ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.lastname} `}</span>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPhone">
                <Form.Control
                  type="number"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.phone}
                  placeholder="teléfono"
                />
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.phone ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.phone} `}</span>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  placeholder="email"
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

              <Form.Group className="mb-2" controlId="formBasicEmail2">
                <Form.Control
                  type="email2"
                  name="email2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email2}
                  placeholder="repita email"
                />
                <Form.Text className="text-muted">
                  <span
                    className={
                      errors.email2 ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.email2} `}</span>
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

              <Form.Group className="mb-2" controlId="formSignupPassword2">
                <div className="d-flex">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.password2}
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
                      errors.password2 ? "text-danger visible" : "invisible"
                    }
                    style={{ fontSize: "12px" }}
                  >{`${errors.password2} `}</span>
                </Form.Text>
              </Form.Group>

              <div className="text-center py-3">
                <Button variant="primary" type="button" className="rounded-0">
                  Registrarse
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;
