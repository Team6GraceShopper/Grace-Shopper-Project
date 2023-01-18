import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//creatAsyncthunk("what its related to / what to do with it")
export const fetchProductsAsync = createAsyncThunk("product/fetchProducts", async () => {
    const { data } = await axios.get("/api/product")
    return data
})


export const productSlice = createSlice({

    name: "products",
    initialState: [1],
    reducers: {
        //fetch the products from db and update state with them

    },

    extraReducers(builder) {
        builder
            //fulfilled means the server made a friendly response
            .addCase(fetchStudentsAsync.fulfilled, (state, action) => {
                //Fixes the warning about having products with the same id in state
               if(state.length > 0){
                return state
               }
                state.push(...action.payload)
            })
    }
})
//get subset of state that is students
export const selectAllProducts = (state) => {
    return state.products
}