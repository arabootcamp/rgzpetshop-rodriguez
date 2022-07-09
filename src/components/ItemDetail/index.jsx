import React, { useState } from 'react';
import styles from './styles.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../components/ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({product}) => {

  const [qtyAdded, setQtyAdded] = useState(0);
  const navigate = useNavigate();

  const handleAdd = counter => {
    setQtyAdded(counter);
  }

  const handleTerminate = () => {
    navigate('/cart');
  } 

  return (
    <Container className="my-5">
      <Row>
        <Col lg="4" className="border py-3">
         <img className={styles.product__img} src={product.image} alt={product.category}/>
        </Col>
        <Col lg="8" className="py-3 border d-flex flex-column justify-content-between">
          <div>
            <span className="d-block text-primary text-start">{product.category}</span>
            <h3 className='text-center my-4'>{product.title}</h3>
            <p className=''>{product.description}</p>
            <span className="d-block text-end text-primary me-0"><strong>stock:</strong><i> {10}</i></span>
            <strong className={`${styles.product__price} d-block my-4`}>{product.price}</strong>
          </div>
          <div>
            { qtyAdded<=0
              ? <ItemCount handleAdd={handleAdd} initial={1} stock={10} />
              : <div className='text-center'>
                  <strong className={`${styles.fs_13p} d-block text-success`}>Usted ha agregado {qtyAdded} cantidades del producto</strong>  
                  <button type="button" onClick={handleTerminate} className="btn btn-outline-primary px-2 m-3 rounded-0">Terminar compra</button>
                  <button type="button" onClick={() => {setQtyAdded(0)} } className="btn btn-outline-primary px-2 m-3 rounded-0">Restablecer</button>
                </div>}  
            <hr />
            <button type="button" onClick={() => {navigate(-1)} } className={`${styles.btn_custom_hover} btn btn-primary px-5 my-3 rounded-0`} >Volver a la página anterior</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail