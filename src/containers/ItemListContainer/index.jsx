import styles from './styles.module.scss';
import React from 'react';
import ItemCount from '../../components/ItemCount';
import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

const ItemListContainer = ({ greeting }) => {

  const handleAdd = count => {
    Swal.fire({
      icon: 'success',
      title: `Carrito`,
      text: `Se agrego el producto al carrito, cantidad: ${count}`,
    })
  }

  return (
    <div className='text-center'>
      <h2 className={`${styles.color_tomato} mt-5 text-center`}>{greeting}</h2>
      <ItemCount handleAdd={handleAdd} initial={1} stock={5}/>
    </div>
  );
}

export default ItemListContainer;