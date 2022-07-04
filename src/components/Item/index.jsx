import React from 'react';
import {Card,Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';
import ItemCount from '../../components/ItemCount';
import Swal from 'sweetalert2'

const Item = ({item}) => {

  const handleAdd = count => {
    Swal.fire({
      icon: 'success',
      title: `Carrito`,
      text: `Se agrego el producto al carrito, cantidad: ${count}`,
    })
  }

  return ( 
    <Col lg="4" className="my-3">
      <Card style={{ maxWidth: '22rem' }} className="h-100 mx-auto">
        <Card.Img variant="top" src={item.image} className={`${styles.item__img}`}/>
        <Card.Body>
          <Card.Title className={`${styles.ww}`}>{item.title}</Card.Title>
          <Card.Text className={`${styles.textJustify}`}>
            {item.description}
          </Card.Text>
          <strong className="d-block my-3 fs-3">{item.price}</strong>
          <Button variant="primary">Ver detalle</Button>
          <ItemCount handleAdd={handleAdd} initial={1} stock={5} />
        </Card.Body>
      </Card>
  </Col> 
  );
}
 
export default Item;