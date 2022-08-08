import { Alert } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { Container, Form, Button } from "react-bootstrap";
import { nameExpReg, phoneExpReg, emailExpReg } from "../../utils/regExp";
import { savePurchaseOrder } from "../../utils/request/savePurchaseOrder";
import Loader from "../Loader";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";

const initialForm = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  email2: "",
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
    form.email.trim() !== form.email2.trim()
  )
    errors.email2 = "El campo email es requerido y debe ser igual al anterior.";
  return errors;
};

const BuyerForm = ({emptyCart}) => {
  const { cart, amountToBePaid } = useContext(CartContext);
  const orderItems = cart.map((el) => ({
    id: el.id,
    title: el.title,
    price: el.price,
    quantity: el.quantity,
  }));
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  useEffect(()=>{
    return (()=>{
      if(response.status==="ok")
        emptyCart(true)
    });
  },[response, emptyCart]);


  return (
    <Container fluid>
      {Object.keys(response).length === 0 && !loading && (
        <div>
          <h3>Complete sus datos de compra</h3>
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
                  className={errors.name ? "text-danger visible" : "invisible"}
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
                  className={errors.phone ? "text-danger visible" : "invisible"}
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
                  className={errors.email ? "text-danger visible" : "invisible"}
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

            <div className="text-center py-3">
              <Button
                variant="primary"
                type="submit"
                className="rounded-0"
                onClick={(e) =>
                  handleSubmit(e, () =>
                    savePurchaseOrder({
                      buyer: {
                        name: form.name,
                        lastname: form.lastname,
                        phone: form.phone,
                        email: form.email,
                      },
                      items: orderItems,
                      amountToBePaid: amountToBePaid()
                    })
                  )
                }
              >
                Enviar datos y confirmar orden
              </Button>
            </div>
          </Form>
        </div>
      )}
      <div>
        {loading && <Loader />}
        {response.status && (
          <Alert
            key="response-post"
            variant={response.status === "ok" ? "success" : "danger"}
            className="my-5"
          >
            {response.message}
          </Alert>
        )}
      </div>
    </Container>
  );
};

export default BuyerForm;
