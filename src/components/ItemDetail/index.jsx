import React from 'react';
import styles from './styles.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../components/ItemCount';
import Swal from 'sweetalert2'

const ItemDetail = ({product}) => {

  const handleAdd = counter => {
    Swal.fire({
      icon: 'success',
      title: `Carrito`,
      text: `Se agrego el producto al carrito, cantidad: ${counter}`,
    })
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
            <strong className={`${styles.product__price} d-block my-4`}>{product.price}</strong>
          </div>
          <ItemCount handleAdd={handleAdd} initial={1} stock={5} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail