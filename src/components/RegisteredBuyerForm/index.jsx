import { Alert } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { Container, Form, Button } from "react-bootstrap";
import { savePurchaseOrder } from "../../utils/request/savePurchaseOrder";
import Loader from "../Loader";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const initialForm = {
  email: "",
};

const validationsForm = (form) => {
  let errors = {};
  return errors;
};

const RegisteredBuyerForm = ({emptyCart}) => {
  const {user}= useContext(AuthContext);
  const { cart, amountToBePaid } = useContext(CartContext);
  const orderItems = cart.map((el) => ({
    id: el.id,
    title: el.title,
    price: el.price,
    quantity: el.quantity,
  }));
  const {
    loading,
    response,
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
          <h3>Usted va a comprar como ...</h3>
          <Form className="mt-3 text-start" action="" method="POST">
            <Form.Group className="mb-2" controlId="RBF_email">
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                disabled
              />
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
                        email: user.email,
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

export default RegisteredBuyerForm;
