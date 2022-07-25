import React from 'react';
import ItemDetail from '../../components/ItemDetail';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';

const ItemDetailContainer = () => {
  const params = useParams();
  const config = {
    collection: "products",
    method: "get",
    type: "doc",
    filter: params.productId || ''
  };
  const { data: productDetail, loading, error } = useFirestore(config);

  return (
    <div className="my-5 text-center">
      {loading
        ? <Loader />
        : error.status
          ? <Alert key="danger" variant="danger"> { error.message } </Alert>
          : <ItemDetail product={productDetail} />}
    </div>
  );
}

export default ItemDetailContainer;