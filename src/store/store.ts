

import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../redux/productsSlice";
import { cartSlice } from "../redux/addToCartSlice";

export const store=configureStore({
    reducer:{
        products:productsSlice.reducer,
        cart:cartSlice.reducer

    }
})

export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;