import React from 'react'
import CartProvider from './context/CartContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
