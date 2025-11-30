import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza, count) => {
    setCart((items) => {
      const index = items.findIndex((item) => item.pizza.id === pizza.id);

      if (index === -1) {
        return [...items, { pizza, count }];
      }

      return items.map((item) =>
        item.pizza.id === pizza.id
          ? { ...item, count: item.count + count }
          : item
      );
    });
  };

  const updateCount = (id, delta) => {
    setCart(
      (items) =>
        items
          .map((item) =>
            item.pizza.id === id
              ? {
                  ...item,
                  count: Math.max(item.count + delta, 0), // evita negativos
                }
              : item
          )
          .filter((item) => item.count > 0) // elimina las pizzas con count <= 0
    );
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.pizza.price * item.count,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCount, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
