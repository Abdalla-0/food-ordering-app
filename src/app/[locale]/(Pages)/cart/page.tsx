"use client";
import { selectCartItems } from "@/store/cart/cartSlice";
import CartItems from "./_components/CartItems/CartItems";
import CheckoutForm from "./_components/CheckoutForm/CheckoutForm";
import { useAppSelector } from "@/store/hooks";
import { getTotalAmount } from "@/lib/cart";

const CartPage = () => {
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);
  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <h1 className="text-primary text-center font-bold text-4xl italic mb-10">
            Cart
          </h1>
          {cart && cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <CartItems cart={cart} totalAmount={totalAmount} />
              <CheckoutForm totalAmount={totalAmount} />
            </div>
          ) : (
            <p className="text-accent text-center">
              There are no items in your cart, please add some
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default CartPage;
