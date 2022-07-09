import React from 'react';
import styles from './styles.module.scss';
import {useCounter} from '../../hooks/useCounter';

const ItemCount = ({handleAdd, initial, stock}) => {

  const { counter, increment, decrement } = useCounter(initial);

  return (  
    <div className=''>
      <div className='d-inline-block border border-secondary'>
          <button type="button" onClick={()=>decrement(1,initial)} className={`${styles.width_33} btn btn-danger py-1 rounded-0`} disabled={counter === 1 ? true : false}>-</button>
          <span className={`${styles.width_50} d-inline-block text-center `}>{counter}</span>
          <button type="button" onClick={()=>increment(1,stock)} className={`${styles.width_33} btn btn-primary py-1 rounded-0`} disabled={counter === stock ? true : false}>+</button>
      </div>
      <span className={`${styles.fs_12p} d-block mt-1`}>
        {(counter === initial) ? `${initial} es el mínimo` : (counter === stock) ? `${stock} es el máximo` : 'añada más!'}
      </span>
      <button type="button" onClick={() => handleAdd(counter)} className="btn btn-outline-primary py-1 px-2 mt-3 rounded-0">Agregar al carrito</button>
    </div>
  );
}
 
export default ItemCount;