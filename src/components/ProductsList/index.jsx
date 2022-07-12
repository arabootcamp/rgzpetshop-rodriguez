import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const ProductsTable = () => {

  const navigate = useNavigate();
  const { cart, removeItem, clear } = useContext(CartContext);
  
  return (
    <div>
      <Container fluid>
        {cart.length > 0 && cart.map(el =>(
          <Row key={`product-${el.id}`} className="py-2 border border-1">
            <Col xs="auto" sm="1" xl="1" className="px-4">{el.id}</Col>
            <Col xs="3" sm="5" xl="6" className="text-start">{el.title}</Col>
            <Col xs="auto" sm="2" xl="2" className="px-4">
              <img src={el.image} alt={el.title} className={`${styles.box__img}`} onClick={() => navigate(`/item/${el.id}`)}/>
              </Col>
            <Col xs="auto" className="px-4">
              <span className="d-block py-2 px-3 bg-warning rounded-circle">{el.quantity}</span>
            </Col>
            <Col xs="auto" sm="1" className="px-4">
              <Button variant="light" onClick={() => { removeItem(el.id) }}>
              <FontAwesomeIcon icon={faTrashCan} className="text-danger" />
            </Button>
            </Col>
          </Row>))}
      </Container>

      <hr />
      <Button variant="outline-danger" onClick={() => { clear() }}>
        Eliminar todo <FontAwesomeIcon icon={faTrash} className="fs-4" />
      </Button>
    </div>
  )
}

export default ProductsTable