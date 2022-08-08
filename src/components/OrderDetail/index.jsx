import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { numberFormatFn } from "../../utils/customFunctions";

const OrderDetail = ({ data }) => {
  return (
    <Container fluid>
      <h4>id de orden: {data.id}</h4>
      <hr />
      <div className="d-none d-md-block ">
        <Row className="py-1 border fw-bold">
          <Col xs="12" md="7">
            Producto
          </Col>
          <Col
            xs="5"
            md="2"
            className="d-flex justify-content-md-center align-items-center"
          >
            Precio
          </Col>
          <Col
            xs="2"
            md="1"
            className="d-flex justify-content-md-center align-items-center"
          >
            Cantidad
          </Col>
          <Col
            xs="5"
            md="2"
            className="d-flex justify-content-end align-items-center"
          >
            Sub-total
          </Col>
        </Row>
      </div>
      {data.items?.length > 0 &&
        data.items.map((el, index) => (
          <Row className="border" key={`items-${index}`}>
            <Col xs="12" md="7" className="my-1 d-flex align-items-center">
              {el.title}
            </Col>
            <Col
              xs="5"
              md="2"
              className="my-1 d-flex justify-content-md-center align-items-center"
            >
              $ {numberFormatFn(el.price)}
            </Col>
            <Col
              xs="2"
              md="1"
              className="my-1 d-flex justify-content-md-center align-items-center"
            >
              <span className="bg-warning rounded-circle px-2">
                {el.quantity}
              </span>
            </Col>
            <Col
              xs="5"
              md="2"
              className="my-1 d-flex justify-content-end align-items-center"
            >
              $ {numberFormatFn(el.price * el.quantity)}
            </Col>
          </Row>
        ))}
      <Row className="border">
        <Col className="my-1 d-flex justify-content-end align-items-center">
          <strong>Total Compra: $ {numberFormatFn(data.amountToBePaid)}</strong>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetail;
