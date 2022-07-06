import React from 'react';
import Item from '../Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

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