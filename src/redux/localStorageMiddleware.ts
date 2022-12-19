import {
   isAsyncThunkAction,
   isFulfilled,
   isAnyOf,
   createListenerMiddleware
} from '@reduxjs/toolkit';
//Actions
import { signIn, signUp } from './userSlice';

import { TUser } from '../types';

const signInListenerMiddleware = createListenerMiddleware();

signInListenerMiddleware.startListening({
   matcher: isAnyOf(isAsyncThunkAction(signIn)),
   effect: (action, listenerApi) => {
      const shouldSave = isFulfilled(signIn);
      const state: { user: TUser } = listenerApi.getState() as { user: TUser };
      if (shouldSave(action)) {
         const { id, email, name, status } = state.user;
         localStorage.setItem(
            'currentUser',
            JSON.stringify({ isLogged: true, id, email, name, status })
         );
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
         const { id, email, name, status } = state.user;
         localStorage.setItem(
            'currentUser',
            JSON.stringify({ isLogged: true, id, email, name, status })
         );
      }
   }
});

export const signInMiddleware = signInListenerMiddleware.middleware;
export const signUpMiddleware = signUpListenerMiddleware.middleware;
