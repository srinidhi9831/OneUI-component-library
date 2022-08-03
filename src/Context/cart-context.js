import { createContext, useContext ,useState } from "react";

export const CartContext=createContext();

export function CartProvider({ children })  {
    const[page,setPage]=useState(1);
    const[stylediv,setstylediv]=useState("container m-auto p-2");
  return (
    <CartContext.Provider value={{page,setPage,stylediv,setstylediv}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
