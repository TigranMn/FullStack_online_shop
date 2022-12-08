import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   UserCredential
} from 'firebase/auth';
import {
   addDoc,
   collection,
   doc,
   DocumentData,
   getDocs,
   query,
   QuerySnapshot,
   setDoc,
   where
} from 'firebase/firestore';
import { getUser } from '../api/api';
import { auth, db } from '../firebase';

type TState = {
   email: string | null;
   id: string | null;
   token: string | null;
   name: string | null;
   lastName: string | null;
   isLoading: boolean;
   error: string;
   isLogged: boolean;
};

const initialState: TState = {
   email: null,
   id: null,
   token: null,
   name: null,
   lastName: null,
   error: '',
   isLogged: false,
   isLoading: false
};

export const signIn = createAsyncThunk(
   'user/signIn',
   async (
      { email, password }: { email: string; password: string },
      { rejectWithValue }
   ) => {
      const { user }: UserCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      );
      const data = await getUser(user);
      return { data, user };
   }
);

export const signUp = createAsyncThunk(
   'user/signUp',
   async ({
      email,
      password,
      firstName,
      lastName
   }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
   }) => {
      const { user }: UserCredential = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      );
      addDoc(collection(db, 'users'), {
         name: firstName,
         lastName,
         email: user.email,
         id: user.uid,
         likedProducts: [],
         basket: []
      });
      return { user, firstName, lastName };
   }
);

export const addProduct = createAsyncThunk(
   'basket/addProduct',
   async ({
      productId,
      userId,
      category,
      count = 1
   }: {
      productId: string;
      userId: string;
      category: string;
      count?: number;
   }) => {
      let collRef = collection(db, 'users');
      let q = query(collRef, where('id', '==', userId));
      let snaps: QuerySnapshot<DocumentData> = await getDocs(q);
      const userRef = doc(db, 'users', snaps.docs[0].id);

      let prod = [...snaps.docs[0].data().basket].find((el) => {
         return el.productId === productId;
      });
      if (prod) {
         setDoc(
            userRef,
            {
               basket: [
                  ...[...snaps.docs[0].data().basket].filter(
                     (el) => el.productId !== productId
                  ),
                  { ...prod, count: prod.count + count }
               ]
            },
            { merge: true }
         );
      } else {
         setDoc(
            userRef,
            {
               basket: [
                  ...snaps.docs[0].data().basket,
                  { productId, category, count: count }
               ]
            },
            { merge: true }
         );
      }
   }
);

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      resetError(state) {
         state.error = '';
      },
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
         .addCase(signIn.rejected, (state, action) => {
            console.log(action.error.message!);
            state.error = action.error.message!;
            state.isLoading = false;
         })
         .addCase(signIn.pending, (state) => {
            state.isLoading = true;
            state.isLogged = false;
         })
         .addCase(signUp.fulfilled, (state, action) => {
            state.isLogged = true;
            state.isLoading = false;
            state.email = action.payload.user.email;
            state.token = action.payload.user.refreshToken;
            state.id = action.payload.user.uid;
            state.lastName = action.payload.lastName;
            state.name = action.payload.firstName;
         })
         .addCase(signUp.rejected, (state, action) => {
            state.error = action.error.message!;
            state.isLoading = false;
         })
         .addCase(signUp.pending, (state) => {
            state.isLoading = true;
            state.isLogged = false;
         });
   }
});

export const { removeUser, resetError } = userSlice.actions;
export default userSlice.reducer;
