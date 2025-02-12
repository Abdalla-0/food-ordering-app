import { Environments } from "@/constants/enums"
import { configureStore } from "@reduxjs/toolkit"
import cart from "./cart/cartSlice"
export const store = configureStore({
    reducer: {
        cart,
    },
    devTools: process.env.NODE_ENV === Environments.DEV
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;