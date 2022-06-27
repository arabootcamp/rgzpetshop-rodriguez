import styles from './styles.module.scss';
import React, { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount';
import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'
import ItemList from '../../components/ItemList';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setItems([]);//esto pq quedaba en cache los items  y al cambiar la url se seguia mostrando
    setError(false);//esto pq quedaba en cache el error y al cambiar la url se seguia mostrando
    setLoading(true);
    const url = "https://fakestoreapi.com/products";
    const getItems = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItems([...data]);
      }
      catch (err) {
        setError(true);
      }
      finally {
        setLoading(false);
      }

    }
    getItems();
  }, [])

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
      <ItemCount handleAdd={handleAdd} initial={1} stock={5} />
      <hr />
      {loading && <Loader />}
      {error && <Alert  key="danger" variant="danger"> Error en la solicitud a la API </Alert>}
      {!loading && !error && (items.length === 0) && <Alert key="warning" variant="warning"> No hay productos para listar </Alert>}
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;