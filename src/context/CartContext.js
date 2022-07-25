import React, { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar cierta cantidad de producto al carrito
  const addItem = (item, quantity) => {
    let productIndex = productIndexInTheCart(item.id)
    if (productIndex !== -1) {;
      const cartCopy = cart.slice(0);// se genera una copia para no mutar directamente a cart
      cartCopy[productIndex].quantity += quantity;
      setCart(cartCopy);
    } 
    else 
      setCart([...cart, { ...item, quantity }]);
  }

  // Remover un item del cart usando su id de producto
  const removeItem = id => setCart(cart.filter(el => el.id !== id));

  // Remover todos los items
  const clear = () => setCart([]);

  //isInCart (utilizado hasta el desafio 10), se cambia por la siguiente funcion
  const productIndexInTheCart = id => cart.findIndex(product => product.id === id);

  //funciones adicionales
  //2 balones + 1 cuerda son 3 productos totales.
  const sumOfAllQuantitiesInTheCart = () => ((cart.length === 0) ? 0 : cart.reduce((acc, curr) => (acc + curr.quantity), 0));

  const quantityForASpecificProductInTheCart = id => {
    let index = cart.findIndex(el => el.id === id);
    return (index === -1) ? 0 : cart[index].quantity;
  }

  const amountToBePaid = () => ((cart.length === 0) ? 0 : cart.reduce((acc, curr, idx) => (acc + curr.price * curr.quantity), 0));

  const isCartEmpty = () => (cart.length ? false : true);

  //datos del contexto
  const data = {
    cart,
    addItem,
    removeItem,
    clear,
    sumOfAllQuantitiesInTheCart,
    quantityForASpecificProductInTheCart,
    amountToBePaid,
    isCartEmpty
  }

  return ( 
    <CartContext.Provider value = { data } > 
      { children } 
    </CartContext.Provider>
  );
}

export default CartProvider;
export { CartContext };