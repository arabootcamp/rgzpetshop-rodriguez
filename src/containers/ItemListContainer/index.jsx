import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../../components/ItemList';
import Loader from '../../components/Loader';
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useFirestore } from '../../hooks/useFirestore';

const ItemListContainer = () => {
  const [filteredBy, setFilteredBy] = useState("show all");
  const params = useParams();
  const { categories } = useContext(CategoriesContext);
  const config = { 
    collection: "products",
    method: "get", 
    type: "docs", 
    filter: (filteredBy === "show all" || filteredBy === "category not found") ? null : filteredBy,  
  }
  const { data: products, loading, error } = useFirestore(config);
  
  //se define si se muestran todos o por categoria los productos
  useEffect(() => {
    if (params?.categoryName) {
      let idx = categories.findIndex(el => el.name === params.categoryName);
      (idx !== -1) ? setFilteredBy(params.categoryName) : setFilteredBy("category not found");
    }
    else{
      setFilteredBy("show all");
    }
  }, [params, categories]);

  return (
    <div className='my-5 text-center'>
      {loading
        ? <Loader />
        : error.status
          ? <Alert key="danger" variant="danger"> {error.message} </Alert>
          : products?.length === 0
            ? <Alert key="warning" variant="warning"> No hay productos para listar </Alert>
            : filteredBy === 'category not found'
              ? <Alert key="warning2" variant="warning"> Categoria no existe </Alert>
              : <ItemList products={filteredBy === 'show all' ? products : products.filter(el => el.category === filteredBy)} />
      }
    </div>

  );
}

export default ItemListContainer;