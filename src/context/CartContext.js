import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  
  // agregar cierta cantidad de un ítem al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
       const newCart = cart.map( product=>{
        if (product.id===item.id) {
          product.quantity += quantity;
        }
        return product;
       });
       setCart(newCart);
    }
    else{
      const newItem = {...item, quantity};
      setCart([...cart, newItem]);
    }
  }

  // Remover un item del cart por usando su id
  const removeItem = id => { 
    const index = cart.findIndex(product => product.id === id);
    const newCart = [...cart.slice(0, index), ...cart.slice(index+1, )];
    setCart(newCart);
  }

  // Remover todos los items
  const clear = () => setCart([]);

  //isInCart: (id) => true|false
  const isInCart= id => cart.some(product => product.id===id);
  
  //datos del contexto
  const data = { cart, addItem, removeItem, clear, isInCart }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };
