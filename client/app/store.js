import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/account/authSlice';
import cartReducer from '../features/shop/cartSlice';
import { signupSlice } from '../features/signup/signupSlice';

const store = configureStore({
  reducer: { auth: authReducer, theSignup: signupSlice, cart: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/account/authSlice';
