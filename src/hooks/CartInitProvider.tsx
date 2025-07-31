"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/cart/cartSlice";

const CartInitProvider = ({ children }: { children: React.ReactNode }) => {
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return <>{children}</>;
};

export default CartInitProvider;
