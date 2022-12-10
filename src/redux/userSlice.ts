import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   UserCredential
} from 'firebase/auth';
import {
   addDoc,
   collection,
   DocumentData,
   getDocs,
   Query,
   query,
   QuerySnapshot,
   setDoc,
   where
} from 'firebase/firestore';
import { getUser } from '../api/api';
import { auth, db } from '../firebase';
import { TBasketType } from '../types';

type TState = {
   email: string | null;
   id: string | null;
   token: string | null;
   name: string | null;
   lastName: string | null;
   isLoading: boolean;
   isError: boolean;
   isLogged: boolean;
   basket: TBasketType[];
   likedProducts: string[];
};

const initialState: TState = {
   email: null,
   id: null,
   token: null,
   name: null,
   lastName: null,
   isError: false,
   isLogged: false,
   isLoading: false,
   basket: [],
   likedProducts: []
};

export const signIn = createAsyncThunk(
   'user/signIn',
   async ({ email, password }: { email: string; password: string }) => {
      const { user }: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const q: Query<DocumentData> = query(collection(db, 'users'), where('id', '==', user.uid));
      const resp: QuerySnapshot<DocumentData> = await getDocs(q);
      const data = resp.docs[0].data();
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
      const { user }: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
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

export const likeProduct = createAsyncThunk(
   'basket/likeProduct',
   async ({ productId, userId }: { productId: string; userId: string }) => {
      const { userRef, snaps } = await getUser(userId);
      setDoc(
         userRef,
         { likedProducts: [...[...snaps.docs[0].data().likedProducts, productId]] },
         { merge: true }
      );
      return productId;
   }
);

export const dislikeProduct = createAsyncThunk(
   'basket/dislikeProduct',
   async ({ productId, userId }: { productId: string; userId: string }) => {
      const { userRef, snaps } = await getUser(userId);
      setDoc(
         userRef,
         {
            likedProducts: [
               ...[...snaps.docs[0].data().likedProducts.filter((el: string) => el !== productId)]
            ]
         },
         { merge: true }
      );
      return productId;
   }
);

export const removeProduct = createAsyncThunk(
   'basket/removeProduct',
   async ({ productId, userId }: { productId: string; userId: string }) => {
      const { userRef, snaps } = await getUser(userId);

      setDoc(
         userRef,
         {
            basket: [...[...snaps.docs[0].data().basket].filter((el) => el.productId !== productId)]
         },
         { merge: true }
      );
      return productId;
   }
);

export const addProduct = createAsyncThunk(
   'basket/addProduct',
   async ({
      productId,
      userId,
      category,
      count
   }: {
      productId: string;
      userId: string;
      category: string;
      count: number;
   }) => {
      const { userRef, snaps } = await getUser(userId);

      const prod = [...snaps.docs[0].data().basket].find((el) => {
         return el.productId === productId;
      });
      if (prod) {
         setDoc(
            userRef,
            {
               basket: [
                  ...[...snaps.docs[0].data().basket].filter((el) => el.productId !== productId),
                  { ...prod, count: prod.count + count }
               ]
            },
            { merge: true }
         );
      } else {
         setDoc(
            userRef,
            {
               basket: [...snaps.docs[0].data().basket, { productId, category, count: count }]
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
      addToBasket(state, action) {
         const prod = state.basket.find((el) => el.productId === action.payload.productId);
         if (prod) prod.count = prod.count + action.payload.count;
         else {
            state.basket.push({
               productId: action.payload.productId,
               category: action.payload.category,
               count: action.payload.count
            });
         }
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
            state.basket = action.payload.data.basket;
            state.likedProducts = action.payload.data.likedProducts;
         })
         .addCase(signIn.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
         })
         .addCase(signIn.pending, (state) => {
            state.isError = false;
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
            state.basket = [];
            state.likedProducts = [];
         })
         .addCase(signUp.rejected, (state) => {
            state.isError = true;
            state.isLoading = false;
         })
         .addCase(signUp.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.isLogged = false;
         })
         .addCase(removeProduct.fulfilled, (state, action) => {
            state.basket = state.basket.filter((item) => item.productId !== action.payload);
         })
         .addCase(likeProduct.fulfilled, (state, action) => {
            state.likedProducts.push(action.payload);
         })
         .addCase(dislikeProduct.fulfilled, (state, action) => {
            state.likedProducts = state.likedProducts.filter((el) => el !== action.payload);
         });
   }
});

export const { removeUser, addToBasket } = userSlice.actions;
export default userSlice.reducer;
