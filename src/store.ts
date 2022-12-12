import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesReducer from './redux/categoriesSlice';
import { signInMiddleware, signUpMiddleware } from './redux/localStorageMiddleware';
import productsReducer from './redux/productsSlice';
import userSliceReducer from './redux/userSlice';

const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
const likedProducts = JSON.parse(localStorage.getItem('likedProducts')!);

const store = configureStore({
   reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      user: userSliceReducer
   },
   preloadedState: {
      user: {
         email: currentUser?.email,
         id: currentUser?.id,
         token: currentUser?.token,
         name: currentUser?.name,
         lastName: currentUser?.lastName,
         isError: false,
         basket: [],
         likedProducts: likedProducts || [],
         isLogged: currentUser?.isLogged,
         isLoading: false
      }
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(signInMiddleware).concat(signUpMiddleware);
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
