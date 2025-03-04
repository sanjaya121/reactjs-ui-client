import { createSlice } from "@reduxjs/toolkit";



interface CartItem {
  // Define the properties of a cart item here
  id: number;
  name: string;
  price: number;
}

const initialState = {
  isLoading: true,
  cart: [] as CartItem[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard:(state,action)=>{
        state.cart.push(action.payload);
    }
  },
 
});

export default cartSlice.reducer;

export  const {addToCard}=cartSlice.actions;
