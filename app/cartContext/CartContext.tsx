import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({});

const CartProvider = ({ children }: CartProviderProps) => {
  const x = 10;

  return <CartContext.Provider value={x}>{children}</CartContext.Provider>;
};
export { CartProvider };
