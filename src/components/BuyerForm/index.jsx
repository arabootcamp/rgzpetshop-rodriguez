import { Alert } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { Container, Form, Button} from "react-bootstrap";
import { nameExpReg, phoneExpReg, emailExpReg } from "../../utils/regExp";
import { savePurchaseOrder } from '../../utils/savePurchaseOrder';
import Loader from "../Loader";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const initialForm = {
  name:"",
  phone:"",
  email: "",
};

const validationsForm = form => { 
  let errors = {};
  if (!form.name.trim() || !nameExpReg.test(form.name.trim())) 
    errors.name="El campo nombre es requerido, ingrese al menos 1 caracter.";
  if (!form.phone.trim() || !phoneExpReg.test(form.phone.trim())) 
    errors.phone = "El campo teléfono es requerido, ingrese solo 8 números.";
  if (!form.email.trim() || !emailExpReg.test(form.email.trim())) 
    errors.email = "El campo email es requerido, ingrese formato (ejm: algunnombre@dominio.com).";
  return errors;
};

const BuyerForm = ({order}) => {

  const {clear} = useContext(CartContext);
  const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);

  useEffect((()=>{
    if (response.status ==="ok"){
      setTimeout(clear, 5000);
    }  
  }), [response.status, clear]);

  return (
    <Container fluid>
      <h2>Complete sus datos de compra</h2>
      <Form className="mt-3 text-start" action="" method="POST">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Ingrese su nombre</Form.Label>
          <Form.Control type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={form.name} autoFocus/>
        <Form.Text className="text-muted">
            {errors.name && <p className="text-danger">{errors.name}</p>}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Ingrese su teléfono</Form.Label>
          <Form.Control type="number" name="phone" onBlur={handleBlur} onChange={handleChange} value={form.phone} />
        <Form.Text className="text-muted">
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingrese su email</Form.Label>
          <Form.Control type="email" name="email" onBlur={handleBlur} onChange={handleChange} value={form.email} />
        <Form.Text className="text-muted">
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Text>
      </Form.Group>
      <div className="text-center py-3">
          <Button variant="primary" type="submit" onClick={ e => handleSubmit(e, () => savePurchaseOrder({...order, buyer: {name: form.name, phone: form.phone, email: form.email}}))}>
            Enviar datos y confirmar orden
          </Button>
      </div>
      </Form>
      <div>
        {loading && <Loader /> }
        {response.status && <Alert key="response-post" variant={ response.status==="ok" ? "success" : "danger"}> {response.message} </Alert>}
      </div>
    </Container>
    );
}

export default BuyerForm
