"use client";

import { selectCartItems } from "@/store/cart/cartSlice";
import { useAppSelector } from "@/store/hooks";

const CartItems = () => {
  const cart = useAppSelector(selectCartItems);
  console.log(cart);

  return <div>CartItems</div>;
};

export default CartItems;
