import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/account/authSlice';
import { signupSlice } from '../features/signup/signupSlice';

const store = configureStore({
  reducer: { auth: authReducer, theSignup: signupSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/account/authSlice';
