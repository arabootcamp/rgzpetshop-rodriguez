import styles from './styles.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center ms-lg-3 py-2 fs-6">
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartWidget__icon} />
    </div>
  );
}

export default CartWidget;