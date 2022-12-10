import {
   isAsyncThunkAction,
   isFulfilled,
   isAnyOf,
   createListenerMiddleware
} from '@reduxjs/toolkit';
import { TUser } from '../types';
import {  addProduct, removeProduct, signIn, signUp } from './userSlice';

const signInListenerMiddleware = createListenerMiddleware();

signInListenerMiddleware.startListening({
   matcher: isAnyOf(isAsyncThunkAction(signIn)),
   effect: (action, listenerApi) => {
      const shouldSave = isFulfilled(signIn);
      const state: { user: TUser } = listenerApi.getState() as { user: TUser };
      if (shouldSave(action)) {
         localStorage.setItem('currentUser', JSON.stringify(state.user));
      }
   }
});

const signUpListenerMiddleware = createListenerMiddleware();

signUpListenerMiddleware.startListening({
   matcher: isAnyOf(isAsyncThunkAction(signUp)),
   effect: (action, listenerApi) => {
      const shouldSave = isFulfilled(signUp);
      const state: { user: TUser } = listenerApi.getState() as { user: TUser };
      if (shouldSave(action)) {
         localStorage.setItem('currentUser', JSON.stringify(state.user));
      }
   }
});

const addProductListenerMiddleware = createListenerMiddleware();

addProductListenerMiddleware.startListening({
   matcher: isAnyOf(isAsyncThunkAction(addProduct)),
   effect: (action, listenerApi) => {
      const shouldSave = isFulfilled(addProduct);
      const state: { user: TUser } = listenerApi.getState() as { user: TUser };
      if (shouldSave(action)) {
         localStorage.setItem('currentUser', JSON.stringify(state.user));
      }
   }
});


const removeProductListenerMiddleware = createListenerMiddleware();

removeProductListenerMiddleware.startListening({
   matcher: isAnyOf(isAsyncThunkAction(removeProduct)),
   effect: (action, listenerApi) => {
      const shouldSave = isFulfilled(removeProduct);
      const state: { user: TUser } = listenerApi.getState() as { user: TUser };
      if (shouldSave(action)) {
         localStorage.setItem('currentUser', JSON.stringify(state.user));
      }
   }
});

export const removeProductMiddleware = removeProductListenerMiddleware.middleware;
export const addProductMiddleware = addProductListenerMiddleware.middleware;
export const signInMiddleware = signInListenerMiddleware.middleware;
export const signUpMiddleware = signUpListenerMiddleware.middleware;