import React from 'react';
import {Card,Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.scss';

const Item = ({item}) => {
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
        </Card.Body>
      </Card>
  </Col> 
  );
}
 
export default Item;