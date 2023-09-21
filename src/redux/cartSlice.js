import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartVisible: false
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialCartState,
    reducers:{
        showCart(state,action){
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;