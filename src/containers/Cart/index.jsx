import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { CartContext } from '../../context/CartContext';
import { Alert, Button } from "react-bootstrap";
import ProductsList from '../../components/ProductsList';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="my-5 text-center">
      <h2 className="mb-5">Lista de productos del carrito</h2>
      {cart.length === 0
        ? <>
          <Alert key="warning" variant="warning"> El carrito esta vacio (no hay items)</Alert>
          <Button variant="primary" className={`${styles.btn_custom_hover} px-5 rounded-0 mt-3`} onClick={() => { navigate("/") }}>Ir al catalogo de productos </Button>
        </>
        : <ProductsList />}
    </div>
  )
}

export default Cart;