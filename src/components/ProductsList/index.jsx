import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { numberFormatFn } from "../../utils/customFunctions";

const ProductsList = () => {
  const navigate = useNavigate();
  const { cart, removeItem, amountToBePaid } = useContext(CartContext);

  return (
    <Container fluid>
      {cart.length > 0 &&
        cart.map((el) => (
          <Row key={`product-${el.id}`} className="border">
            <Col md="6" className="">
              <div className="d-flex justify-content-start align-items-center">
                <div className="">
                  <img
                    src={el.image}
                    alt={el.title}
                    className={`${styles.box__img}`}
                    onClick={() => navigate(`/item/${el.id}`)}
                  />
                </div>
                <span className="mx-3">{el.title}</span>
              </div>
            </Col>
            <Col xs="4" md="2" className="d-flex align-items-center">
              <span className="">$ {numberFormatFn(el.price)}</span>
            </Col>
            <Col xs="2" md="1" className="d-flex align-items-center">
              <span className="bg-warning rounded-circle px-2">
                {el.quantity}
              </span>
            </Col>
            <Col xs="4" md="2" className="d-flex align-items-center">
              <span className="">
                $ {numberFormatFn(el.price * el.quantity)}
              </span>
            </Col>
            <Col xs="2" md="1" className="d-flex align-items-center">
              <Button
                variant="light"
                onClick={() => {
                  removeItem(el.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} className="text-danger" />
              </Button>
            </Col>
          </Row>
        ))}
      <div className="my-4 border">
        <span>Total Compra: </span>
        <strong className="mx-3">
          $ {numberFormatFn(amountToBePaid())}
          <FontAwesomeIcon icon={faSackDollar} className="text-success mx-2" />
        </strong>
      </div>
    </Container>
  );
};

export default ProductsList;
