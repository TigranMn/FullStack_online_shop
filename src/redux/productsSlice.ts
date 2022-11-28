import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct, TProductState } from '../types';
import getData, { fetchSize } from '../api/api';

const initialState: TProductState = {
   isLoading: false,
   isError: false,
   products: [],
   pages: 1
};

const getSize = createAsyncThunk(
   'products/getSize',
   async (category: string | undefined) => {
      let pages: number = await fetchSize('/' + category);
      return pages;
   }
);

const getProducts = createAsyncThunk(
   'products/fetchProducts',
   async ({
      category,
      currentPage
   }: {
      category: string | undefined;
      currentPage: number;
   }) => {
      let result: TProduct[] = [];
      let data = await getData('/' + category, currentPage);

      data.forEach((doc) => {
         const [id, { name, count, gender, imgUrl, price, views }] = [
            doc.id,
            doc.data()
         ];
         result.push({ id, name, count, gender, imgUrl, price, views });
      });
      if (!result.length) {
         throw new Error('Something went wrong');
      }
      return result;
   }
);

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
         })
         .addCase(getProducts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(getProducts.rejected, (state) => {
            state.products = [];
            state.isLoading = false;
            state.isError = true;
         })
         .addCase(getSize.fulfilled, (state, action) => {
            state.pages = Math.ceil(action.payload / 6);
         });
   }
});

export { getProducts, getSize };
export default productsSlice.reducer;
