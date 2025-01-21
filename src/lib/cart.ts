import { CartItem } from "@/types/cart";

export const deliveryFee = 5;

export const getCartQuantity = (cart: CartItem[]) => {
    return cart.reduce((quantity, item) => item.quantity! + quantity, 0)
}

export const getItemQuantity = (id: string, cart: CartItem[]) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
};

export const getCartSubtotal = (cart: CartItem[]) => {
    return cart.reduce((total, cartItem) => {
        // item.basePrice + item.size.price + extra prices
        const extrasTotal = cartItem.extra?.reduce(
            (sum, extra) => sum + (extra.price || 0),
            0
        );

        const itemTotal =
            cartItem.basePrice + (extrasTotal || 0) + (cartItem.size?.price || 0);

        return total + itemTotal * cartItem.quantity!;
    }, 0);
};

export const getTotalAmount = (cart: CartItem[]) => {
    return getCartSubtotal(cart) + deliveryFee;
};