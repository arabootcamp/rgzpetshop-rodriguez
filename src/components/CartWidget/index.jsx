import styles from './styles.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ productsQuantity }) => {
  return (
    <div className="d-flex align-items-center ms-lg-3 py-2 fs-6">
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartWidget__icon} />
      <span className="bg-danger text-light px-1 rounded-circle">{productsQuantity}</span>
    </div>
  );
}

export default CartWidget;