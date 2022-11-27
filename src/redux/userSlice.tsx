import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../types';

type TState = {
   email: string | null;
   token: string | null;
   id: string | null;
};

const currentUser: TUser = JSON.parse(
   localStorage.getItem('currentUser') || 'false'
);

const initialState: TState = {
   email: currentUser.email || null,
   id: currentUser.id || null,
   token: currentUser.token || null
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser(state, action) {
         state.email = action.payload.email;
         state.token = action.payload.token;
         state.id = action.payload.id;
      },
      removeUser(state) {
         state.email = null;
         state.token = null;
         state.id = null;
      }
   }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
