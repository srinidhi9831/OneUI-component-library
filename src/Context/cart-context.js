import { createContext, useContext ,useState } from "react";

export const CartContext=createContext();

export function CartProvider({ children })  {
    const[page,setPage]=useState(1);
  return (
    <CartContext.Provider value={{page,setPage}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
