import styles from './styles.module.scss';
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2 className={`${styles.color_tomato} mt-5 text-center`}>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;