import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartVisible: false,
    cartItems : [],
    totalQuantity : 0,
    networkStatus: 'sending'
}

const cartSlice = createSlice({
    name:'cart',
    initialState: initialCartState,
    reducers:{
        showCart(state,action){
            state.isCartVisible = !state.isCartVisible;
        },

        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if(!existingItem){
                state.cartItems.push(newItem);
            }
            else{
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.price * existingItem.quantity;
            }
        },
        
        decreaseQuantity(state,action){
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if(existingItem.quantity == 1){
                state.cartItems = state.cartItems.filter(item => item.id!=id);
                return
            }
            existingItem.quantity = existingItem.quantity -1;
            existingItem.total = existingItem.price * existingItem.quantity;
        },

        updateNetworkStatus(state,action){
            const networkStatus = action.payload;
            state.networkStatus = networkStatus;
        },

        updateCartData(state,action){
            const updatedArray = action.payload;
            if(updatedArray){
                state.cartItems = updatedArray;
            }
        }


    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;