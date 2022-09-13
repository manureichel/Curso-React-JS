import { createContext, useState } from "react";

export const CartContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { ...item, quantity }]);
      return true;
    } else {
      alert("El producto ya se encuentra en el carrito");
      return false;
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
