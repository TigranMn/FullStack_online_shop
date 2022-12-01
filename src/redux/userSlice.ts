import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { getUser } from '../api/api';
import { auth } from '../firebase';

type TState = {
   email: string | null;
   id: string | null;
   token: string | null;
   name: string | null;
   lastName: string | null;
   isLoading: boolean;
   isError: boolean;
   isLogged: boolean;
};

const currentUser: TState = JSON.parse(
   localStorage.getItem('currentUser') || 'false'
);

const initialState: TState = {
   email: currentUser.email || null,
   id: currentUser.id || null,
   token: currentUser.token || null,
   name: currentUser.name || null,
   lastName: currentUser.lastName || null,
   isLoading: false,
   isError: false,
   isLogged: currentUser.isLogged || false
};

export const signIn = createAsyncThunk(
   'user/signIn',
   async ({ email, password }: { email: string; password: string }) => {
      const { user }: UserCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      );
      const data = await getUser(user);
      return { data, user };
   }
);

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      removeUser(state) {
         state.email = null;
         state.token = null;
         state.id = null;
         state.lastName = null;
         state.name = null;
         state.isLogged = false;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(signIn.fulfilled, (state, action) => {
            state.isLogged = true;
            state.isLoading = false;
            state.email = action.payload.user.email;
            state.token = action.payload.user.refreshToken;
            state.id = action.payload.user.uid;
            state.lastName = action.payload.data.lastName;
            state.name = action.payload.data.name;
         })
         .addCase(signIn.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
            console.log(2);
         })
         .addCase(signIn.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.isLogged = false;
         });
   }
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
