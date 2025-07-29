import { CartItem } from "@/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";



interface CartState {
    items: CartItem[]
}

const initialCartItems = localStorage.getItem("cartItems");

const initialState: CartState = {
    items: initialCartItems ? JSON.parse(initialCartItems) : [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        actionAddToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 0) + 1
                existingItem.size = action.payload.size
                existingItem.extra = action.payload.extra
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        actionRemoveCartItem: (state, action: PayloadAction<{ id: string }>) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id)
                } else {
                    item.quantity! -= 1
                }
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        actionRemoveFromCart: (state, action: PayloadAction<{ id: string }>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        actionClearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cartItems");
        }
    }
})

export const { actionAddToCart, actionRemoveCartItem, actionRemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;
