import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductsList from '../../components/ProductsList';
import { Modal } from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import BuyerForm from '../../components/BuyerForm';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, amountToBePaid, isCartEmpty } = useContext(CartContext);
  //grabar un objeto del formato { buyer: { name, phone, email }, items: [{ id, title, price }], date, total }
  const items = cart.map(el => ({ id: el.id, title: el.title, price: el.price, quantity: el.quantity }));
  const purchaseOrder = { buyer: { name: "", phone: "", email: "" }, items, date: new Date().toLocaleString(), amountToBePaid: amountToBePaid() };
  //modal para pedir datos de comprador
  const {isOpenModal, openModal, closeModal} = useModal(false);

  const confirmPurchaseOrder = () => openModal();

  return (
    <div className="my-5 text-center">
      <h2 className="mb-5">Lista de productos del carrito</h2>
      {isCartEmpty()
        ? <>
          <Alert key="warning" variant="warning"> El carrito esta vacio (no hay items)</Alert>
          <Button variant="primary" className={`${styles.btn_custom_hover} px-5 rounded-0 mt-3`} onClick={() => navigate("/")}>Ir al catalogo de productos </Button>
        </>
        : <>
          <ProductsList />
          {isOpenModal && <Modal isOpen={isOpenModal} closeModal={closeModal}> <BuyerForm order={purchaseOrder}/> </Modal>}
          <Button variant="primary" className={`${styles.btn_custom_hover} px-5 rounded-0 mt-4`} onClick={confirmPurchaseOrder}>Confirmar orden de compra</Button>
        </>}
    </div>
  )
}

export default Cart;