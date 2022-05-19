import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [teste, setTeste] = useState();

  return (
    <CartContext.Provider value={{ teste, setTeste }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
