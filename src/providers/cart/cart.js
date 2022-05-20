import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [requestTotalPrice, setRequestTotalPrice] = useState(0);

  return (
    <CartContext.Provider value={{ requestTotalPrice, setRequestTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
