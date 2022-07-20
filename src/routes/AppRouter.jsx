import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import Cart from '../containers/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container className="p-3 shadow min-vh-100">
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:categoryName" element={<ItemListContainer />}></Route>
            <Route path="/item/:productId" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </Container>
    </BrowserRouter> 
  )
}

export default AppRouter