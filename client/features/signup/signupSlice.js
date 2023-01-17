import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk('user/addUser', async ({username, password, firstName, lastName, email, phoneNumber, address}) => {
    try{
        let { data } = await axios.post(`/api/users`, {username, password, firstName, lastName, email, phoneNumber, address});
        return data;
    }catch(err){
        console.log(err)
    }
});



const initialState = {
    users: [],
}


export const signupSlice = createSlice({
    name: 'signupSlice',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.users.push(action.payload)
        })
    }
})

export const userState = (state) => state.theSignup;


export default signupSlice

