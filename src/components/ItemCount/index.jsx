import React, { useState } from 'react';
import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'
import styles from './styles.module.scss';

const ItemCount = ({handleAdd, initial, stock}) => {

  const [count, setCount] = useState(initial);

  const onDecrement = () => {
   
    let newCount=count - 1;
    if(newCount === 1){
      Swal.fire({
        icon: 'warning',
        title: `Contador`,
        text: `El contador es igual a la cantidad mínima 1`,
      })
    }
    setCount(newCount);
  }

  const onAdd = () => {
   
    let newCount = count + 1;
    if (newCount === stock) {
      Swal.fire({
        icon: 'warning',
        title: `Contador`,
        text: `El contador es igual a la cantidad máxima, es decir igual al stock ${stock}`,
      })
    }
    setCount(newCount);
  }

  return (  
    <div className='d-inline-block mt-5 p-3 border'>
      <div className={`${styles.bg_gray} d-inline-block p-3 me-sm-3`}>
        <div className='d-inline-block border border-secondary'>
          <button type="button" onClick={onDecrement} className={`${styles.width_33} btn btn-danger py-1 rounded-0`} disabled={(count===1? true:false)}>-</button>
          <span className={`${styles.width_50} d-inline-block text-center `}>{count}</span>
          <button type="button" onClick={onAdd} className={`${styles.width_33} btn btn-primary py-1 rounded-0`} disabled={(count === stock ? true : false)}>+</button>
        </div>
      </div>
      <button type="button" onClick={() => handleAdd(count)} className="d-block d-sm-inline-block btn btn-outline-primary py-1 px-2 rounded-0">Agregar al carrito</button>
    </div>
  );
}
 
export default ItemCount;