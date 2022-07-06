import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredBy, setFilteredBy] = useState('');
  
  const params=useParams();

  //montaje
  useEffect(() => {
    setProducts([]);//esto pq quedaba en cache los items  y al cambiar la url se seguia mostrando
    setError(false);//esto pq quedaba en cache el error y al cambiar la url se seguia mostrando
    setLoading(true);
    const url = "https://fakestoreapi.com/products";
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts([...data]);
      }
      catch (err) {
        console.log(err);
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

//cuando se actualiza params
useEffect(()=>{
  if (params?.id){
    if ((params.id === 'electronics' || params.id === 'jewelery' || params.id === "men's clothing" || params.id === "women's clothing"))
      setFilteredBy(params.id);
    else  
      setFilteredBy('category not found');
  }
  else{
    setFilteredBy('show all');
  }
},[params]);

  return (
    <div className='my-5 text-center'>
      {loading
        ? <Loader />
        : error
          ? <Alert key="danger" variant="danger"> Error en la solicitud a la API </Alert>
          : products?.length===0
            ? <Alert key="warning" variant="warning"> No hay productos para listar </Alert>
            : filteredBy === 'category not found'
              ? <Alert key="warning2" variant="warning"> Categoria no existe </Alert>
              : <ItemList products={filteredBy==='show all' ?  products : products.filter(el => el.category === filteredBy)} />
      }
    </div>

  );
}

export default ItemListContainer;