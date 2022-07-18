import React, { useContext } from 'react'
import styles from './styles.module.scss';
import { CartContext } from '../../context/CartContext';
import { Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashCan, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {

  const navigate = useNavigate();
  const { cart, removeItem, clear } = useContext(CartContext);

  let payment = cart.reduce((acc, curr, idx) => (acc + curr.price * curr.quantity), 0).toFixed(2);

  return (
    <div>
      <Container fluid>
        {cart.length > 0 && cart.map(el => (
          <div key={`product-${el.id}`} className={`${styles.grid} border py-2`}>
            <div className="d-flex align-items-center">
              <div className='text-center mx-3'>
                <img src={el.image} alt={el.title} className={`${styles.box__img}`} onClick={() => navigate(`/item/${el.id}`)} />
              </div>
              <span className='mx-3'>{el.title}</span>
            </div>
            <div className="mt-3 mt-md-0">
              <Row>
                <Col className='d-flex align-items-center mx-3'><span className="">$ {el.price}</span></Col>
                <Col className='d-flex align-items-center'><span className="bg-warning rounded-circle px-2">{el.quantity}</span></Col>
                <Col className='d-flex align-items-center'>
                  <span className="">
                    $ {el.price * el.quantity}
                  </span>
                </Col>
                <Col className='d-flex align-items-center'>
                  <Button variant="light" onClick={() => { removeItem(el.id) }} >
                    <FontAwesomeIcon icon={faTrashCan} className="text-danger" />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>))}
        <div className="my-4 border">
          <span>Total Compra: </span>
          <strong className='mx-3'>
            $ {payment}
            <FontAwesomeIcon icon={faSackDollar} className="text-success mx-2" />
          </strong>
        </div>
      </Container>
      <hr />
      <Button variant="outline-danger" onClick={() => { clear() }}>
        Eliminar todo <FontAwesomeIcon icon={faTrash} className="fs-4" />
      </Button>
    </div>
  )
}

export default ProductsTable