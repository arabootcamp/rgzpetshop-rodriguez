import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  const { totalNumberOfProductsInCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className={(totalNumberOfProductsInCart() === 0) ? "d-none" : "d-flex align-items-center ms-lg-3 py-2 fs-6"}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartWidget__icon} onClick={() => navigate("/cart")} />
      <span className="bg-danger text-light px-1 rounded-circle">{totalNumberOfProductsInCart()}</span>
    </div>
  );
}

export default CartWidget;