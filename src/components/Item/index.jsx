import React from 'react';
import {Card,Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/item/${product.id}`);
  }

  return ( 
    <Col lg="4" className="my-2">
      <Card style={{ maxWidth: '22rem' }} className="h-100 mx-auto">
        <span className="text-start text-primary ms-3"><strong>category:</strong><i className=''> {product.category}</i></span>
        <Card.Img variant="top" src={product.image} className={`${styles.item__img}`}/>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title className={`${styles.ww}`}>{product.title}</Card.Title>
          <div>
            <strong className="d-block my-3 fs-3">{product.price}</strong>
            <Button variant="primary" onClick={handleDetail} className={`${styles.btn_custom_hover} rounded-0 w-100 btn-custom-hover`}>Ver detalle</Button>
          </div>
        </Card.Body>
        <span className="text-end text-primary me-3 mb-2"><strong>stock:</strong><i className=''> {10}</i></span>
      </Card>
  </Col> 
  );
}
 
export default Item;