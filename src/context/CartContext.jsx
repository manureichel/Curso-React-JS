import { createContext, useState } from "react";

export const CartContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const addItem = (item, quantity) => {
    const productInCart = isInCart(item.id);
    if (productInCart) {
      productInCart.quantity += quantity;
      setCart([...cart]);
      return true;
    } else {
      setCart([...cart, { ...item, quantity }]);
      return true;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, isInCart, clear, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
