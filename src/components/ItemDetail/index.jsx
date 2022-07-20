import React, { useState, useContext } from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { numberFormatFn } from '../../helpers/customFunctions';
import ItemCount from '../../components/ItemCount';

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem, quantityOfProductInTheCart } = useContext(CartContext);
  let initial = (product.stock > quantityOfProductInTheCart(product.id)) ? 1 : 0;

  const handleAdd = counter => {
    setQtyAdded(counter);
    addItem(product, counter);
  }

  const handleTerminate = () => navigate('/cart');

  return (
    <Container className="my-5">
      <Row>
        <Col lg="4" className="border py-3">
          <img className={styles.product__img} src={product.image} alt={product.category} />
        </Col>
        <Col lg="8" className="py-3 border d-flex flex-column justify-content-between">
          <div>
            <span className="d-block text-primary text-start">{product.category}</span>
            <h3 className='text-center my-4'>{product.title}</h3>
            <p className=''>{product.description}</p>
            <span className="d-block text-end text-primary me-0"><strong>stock:</strong><i> {product.stock - quantityOfProductInTheCart(product.id)}</i></span>
            <strong className={`${styles.product__price} d-block my-4`}>$ {numberFormatFn(product.price)}</strong>
          </div>
          <div>
            {(qtyAdded <= 0 && (product.stock > quantityOfProductInTheCart(product.id)))
              ? <ItemCount handleAdd={handleAdd} initial={initial} stock={product.stock - quantityOfProductInTheCart(product.id)} />
              : <div className='text-center'>
                <strong className={(qtyAdded > 0) ? `${styles.fs_13p} d-block text-success` : 'd-none'}>Usted agregó {qtyAdded} cantidades del producto al carrito</strong>
                <button type="button" onClick={handleTerminate} className="btn btn-outline-primary px-2 m-3 rounded-0">Terminar compra</button>
                <span className={(product.stock === quantityOfProductInTheCart(product.id)) ? 'd-block  text-danger' : 'd-none'}>No queda stock</span>
              </div>}
            <hr />
            <button type="button" onClick={() => { navigate(-1) }} className={`${styles.btn_custom_hover} btn btn-primary px-5 my-3 rounded-0`} >Volver a la página anterior</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail