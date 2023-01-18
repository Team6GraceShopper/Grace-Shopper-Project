import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/account/authSlice';
import { signupSlice } from '../features/signup/signupSlice';
import {cartReducer, getTheData} from '../features/shop/cartSlice'

const store = configureStore({
  reducer: { auth: authReducer, theSignup: signupSlice, reducer: cartReducer , cartReducer: getTheData},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/account/authSlice';
