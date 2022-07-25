import React from 'react'
import CartProvider from './context/CartContext';
import CategoriesProvider from './context/CategoriesContext';
import AppRouter from './routes/AppRouter';

function App() {
  return ( 
    <CategoriesProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider> 
    </CategoriesProvider>
  );
}

export default App;