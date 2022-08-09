import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ProductsList from "../../components/ProductsList";
import { Modal } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import BuyerForm from "../../components/BuyerForm";
import RegisteredBuyerForm from "../../components/RegisteredBuyerForm";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isCartEmpty, clear } = useContext(CartContext);

  //modal para pedir datos de comprador
  const { isOpenModal, openModal, closeModal } = useModal(false);
  const processOrder = () => openModal();

  //función quye activa el hijo formBuyer, si se ingreso la orden a firebase se vacia el carro
  const emptyCart = (emptyCart) => {
    emptyCart && clear();
  };

  return (
    <div className="my-5 text-center">
      <h2 className="mb-5">Lista de productos del carrito</h2>
      {isCartEmpty() ? (
        <>
          <Alert key="warning" variant="warning">
            {" "}
            El carrito esta vacio (no hay productos)
          </Alert>
          <Button
            variant="primary"
            className={`${styles.btn_custom_hover} px-5 rounded-0 mt-3`}
            onClick={() => navigate("/")}
          >
            Ir al catálogo de productos{" "}
          </Button>
        </>
      ) : (
        <>
          <ProductsList />
          <hr />
          <div className="d-flex justify-content-around">
            <Button
              variant="outline-danger"
              className="px-sm-5 rounded-0"
              onClick={() => {
                clear();
              }}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="primary"
              className={`${styles.btn_custom_hover} px-sm-5 rounded-0`}
              onClick={processOrder}
            >
              Ingresar orden
            </Button>
          </div>
          {isOpenModal && (
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              {user.signIn ? (
                <RegisteredBuyerForm emptyCart={emptyCart} />
              ) : (
                <BuyerForm emptyCart={emptyCart} />
              )}
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
