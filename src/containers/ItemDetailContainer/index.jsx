import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setProductDetail(null);//esto pq quedaba en cache el productDetail y al cambiar la url se seguia mostrando
    setError(false);//esto pq quedaba en cache el error y al cambiar la url se seguia mostrando
    setLoading(true);
    const url = "https://fakestoreapi.com/products/1";
    const getProduct = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProductDetail(data);
      }
      catch (err) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [])

  return (
    <div className="my-5 text-center">
      {loading && <Loader />}
      {error && <Alert key="danger" variant="danger"> Error en la solicitud a la API </Alert>}
      {!loading && !error && !productDetail && <Alert key="warning" variant="warning"> No existe detalle del producto </Alert>}
      {productDetail && <ItemDetail product={productDetail} />}
    </div>
  );
}

export default ItemDetailContainer;