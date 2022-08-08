import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useFirestore } from "../../hooks/useFirestore";
import Loader from "../../components/Loader";
import OrderDetail from "../../components/OrderDetail";

//configuracion inicial de la peticion a firestore
const initialRequestConfig = {
  collection: "orders",
  method: "get",
  type: "doc",
  filter: "",
};

const OrderSearch = () => {
  const [formError, setFormError] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [requestConfig, setRequestConfig] = useState(initialRequestConfig);
  const {data: order, loading, error } = useFirestore(requestConfig);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(false);
    setShowOrder(false);
    let orderId = e.target.orderId.value;
    if (orderId.trim() !== "") {
      setShowOrder(true);
      setRequestConfig({ ...requestConfig, filter: orderId });
    } else {
      setFormError(true);
    }
  };

  return (
    <Container fluid className="my-5">
      <h2 className="text-center">Buscador de Ordenes</h2>
      <Row className="mt-5 justify-content-center">
        <Col md="8" lg="5" className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} xs="12">
                <Form.Control
                  type="text"
                  name="orderId"
                  placeholder="Ingrese el id de la orden"
                  className="me-2 rounded-0"
                  aria-label="Search"
                />
                <span
                  className={formError ? "text-danger visible" : "invisible"}
                  style={{ fontSize: "12px" }}
                >
                  Debe ingresar al menos 1 caracter
                </span>
              </Form.Group>
              <Form.Group as={Col} xs="12"></Form.Group>
              <Form.Group as={Col} xs="12" className="text-center">
                <Button type="submit" className="rounded-0 my-3">
                  Buscar
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
      {showOrder &&
        (loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : error.status ? (
          <Alert key="warning3" variant="warning" className="text-center">
            {error.message}
          </Alert>
        ) : (
          <OrderDetail data={order} />
        ))}
    </Container>
  );
};

export default OrderSearch;
