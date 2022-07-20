import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Item from '../Item';

const ItemList = ({ products }) => {

  return (
    <Container fluid className="m-0 p-0">
      <Row className="justify-content-center">
        {products.map(el => <Item product={el} key={`product${el.id}`} />)}
      </Row>
    </Container>
  );
}

export default ItemList;