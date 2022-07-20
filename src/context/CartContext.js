import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar cierta cantidad de un ítem al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += quantity;
        }
        return product;
      });
      setCart(newCart);
    } 
    else {
      const newItem = {
        ...item,
        quantity
      };
      setCart([...cart, newItem]);
    }
  }

  // Remover un item del cart por usando su id
  const removeItem = id => {
    setCart(cart.filter(el => el.id !== id));
  }

  // Remover todos los items
  const clear = () => setCart([]);

  //isInCart: (id) => true|false,  solicitado en ejercicio
  const isInCart = id => cart.some(product => product.id === id);

  //funciones adicionales
  const totalNumberOfProductsInCart = () => ((cart.length === 0) ? 0 : cart.reduce((acc, curr) => (acc + curr.quantity), 0));

  const quantityOfProductInTheCart = id => {
    let index = cart.findIndex(el => el.id === id);
    return (index === -1) ? 0 : cart[index].quantity;
  }

  const amountToBePaid = () => ((cart.length === 0) ? 0 : cart.reduce((acc, curr, idx) => (acc + curr.price * curr.quantity), 0));

  //datos del contexto
  const data = {
    cart,
    addItem,
    removeItem,
    clear,
    totalNumberOfProductsInCart,
    quantityOfProductInTheCart,
    amountToBePaid,
  }

  return ( <CartContext.Provider value = { data } > { children } </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };