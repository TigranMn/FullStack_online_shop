import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesReducer from './redux/categoriesSlice';
import productsReducer from './redux/productsSlice';
import userSliceReducer from './redux/userSlice';

const store = configureStore({
   reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      user: userSliceReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
