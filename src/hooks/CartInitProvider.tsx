"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectCartItems, setCartFromStorage } from "@/store/cart/cartSlice";

const CartInitProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  // الخطوة 1: تحميل cart من localStorage بعد التحميل
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        dispatch(setCartFromStorage(parsed));
      } catch {
        console.error("Invalid cart data in localStorage");
      }
    }
  }, [dispatch]);

  // الخطوة 2: تحديث localStorage عند تغيير cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return <>{children}</>;
};

export default CartInitProvider;
