import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {

    setProductDetail({});//esto pq quedaba en cache el productDetail y al cambiar la url se seguia mostrando
    setError(false);//esto pq quedaba en cache el error y al cambiar la url se seguia mostrando
    setLoading(true);
    const url = `https://fakestoreapi.com/products/${params.id}`;
    const getProduct = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProductDetail(data);
      }
      catch (err) {
        console.log(err);
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [params])

  return (
    <div className="my-5 text-center">
      {loading
        ? <Loader />
        : error
          ? <Alert key="danger" variant="danger"> Error en la solicitud a la API </Alert>
          : !productDetail// si prodcutDetail es null
            ? <Alert key="warning" variant="warning"> No existe detalle del producto </Alert>
            : <ItemDetail product={productDetail} />}
    </div>
  );
}

export default ItemDetailContainer;