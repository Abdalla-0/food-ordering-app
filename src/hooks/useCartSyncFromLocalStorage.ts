import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { actionAddToCart } from "@/store/cart/cartSlice";

export function useCartSyncFromLocalStorage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const cartItemsRaw = localStorage.getItem("cartItems");
        if (cartItemsRaw) {
            const cartItems = JSON.parse(cartItemsRaw);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cartItems.forEach((item: any) => {
                dispatch(actionAddToCart(item));
            });
        }
    }, [dispatch]);
}
