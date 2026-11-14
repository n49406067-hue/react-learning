import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;

            const existingProduct = state.items.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;

            } else {
                state.items.push({
                    ...product,
                    quantity: 1
                });
            }

            state.totalItems += 1;
            state.totalPrice += product.price;
        },

        increaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
                state.totalItems += 1;
                state.totalPrice += product.price;
            }
        },

        decreaseQuantity: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if(product && product.quantity > 1) {
                product.quantity -= 1;
                state.totalItems -= 1;
                state.totalPrice -= product.price;
            }
        },

        removeFromCart: (state,action) => {
            const product = state.items.find(
                (item) => item.id === action.payload
            );

            if(product) {
                state.totalItems -= product.quantity;
                state.totalPrice -= product.price * product.quantity;

                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                );
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }

    }
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;