import { CartItem } from "@/types/cart";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";



interface CartState {
    items: { [key: string]: number },
    records: CartItem[]
}

const initialState: CartState = {
    items: {},
    records: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export const { } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.records;
console.log(selectCartItems);
