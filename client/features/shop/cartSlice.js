import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getData = createAsyncThunk('cart/getData', async (cartId) => {
    try {
        const data = await axios.get(`http://localhost:8080/api/cart/${cartId}`)
        return data;
    } 
    catch(err){
        console.log(err)
    }
})

export const addToTheCart = createAsyncThunk('cart/addToCart', async ({ userId, productId, cartId }) => {
    try {
        let {data} = await axios.post(`http://localhost:8080/api/cart/${cartId}`, {userId, productId, cartId});
        return data;
    }
    catch (err){
        console.log(err)
    }
})

const cartSlice = createSlice ({

    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        getTheData: (state, action) => {
            state.cart.push(action.payload);
        },
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if(itemInCart) {
                itemInCart.quantity++
            } else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    getTheData,
    addToCart,
} = cartSlice.actions;