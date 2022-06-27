import React from 'react';
import Item from '../Item';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ({ items }) => {

  return (
    <Container fluid className="m-0 p-0">
      <Row className="justify-content-center">
        {items.map(el => <Item item={el} key={`item${el.id}`} />)}
      </Row>
    </Container>
  );
}

export default ItemList;