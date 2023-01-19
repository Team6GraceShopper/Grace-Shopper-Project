import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getData = createAsyncThunk('cart/getData', async (cartId) => {
    try {
        const data = await axios.get(`http://localhost:8080/api/cart/${cartId}`)
        return data.data;
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
        cart: {
            products:[]
        },
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.cart = action.payload
        })
    }
});

export default cartSlice.reducer;
