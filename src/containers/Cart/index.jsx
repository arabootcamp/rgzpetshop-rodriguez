import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Alert } from "react-bootstrap";
import ProductsTable from '../../components/ProductsList';

const Cart = () => {

  const {cart} = useContext(CartContext);

  return (
    <div className="my-5 text-center">
      <h2 className="mb-5">Lista de productos del carrito</h2>
      { cart.length === 0 
          ? <Alert key="warning" variant="warning"> El carrito esta vacio </Alert>
          : <ProductsTable/>}
    </div>
  )
}

export default Cart;