import React, { createContext, useState, useMemo, useContext } from "react";
import { BookWithQuantityType } from "@/utils";

interface CartContextType {
  cartData: BookWithQuantityType[];
  setCartData: React.Dispatch<React.SetStateAction<BookWithQuantityType[]>>;
  removeFromCartData: (id: number) => void;
  addToCart: (item: BookType) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartData: [],
  setCartData: () => {},
  removeFromCartData: () => {},
  addToCart: () => {},
  updateCartQuantity: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<BookWithQuantityType[]>([]);

  const removeFromCartData = (id: number) => {
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    setCartData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const addToCart = (item: BookWithQuantityType) => {
    setCartData((prev) => [...prev, item]);
  };

  const value = useMemo(
    () => ({
      cartData,
      setCartData,
      removeFromCartData,
      addToCart,
      updateCartQuantity,
    }),
    [cartData]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartData = () => {
  return useContext(CartContext);
};
