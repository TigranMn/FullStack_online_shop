import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct, TProductState } from '../types';
import getData, { getSize } from '../api/api';

const initialState: TProductState = {
   isLoading: false,
   isError: false,
   products: [],
   pages: 1
};

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
      let pages = await getSize('/' + category);
      return { result, pages };
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
            state.products = action.payload.result;
            state.pages = Math.ceil(action.payload.pages / 6);
         })
         .addCase(getProducts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(getProducts.rejected, (state) => {
            state.products = [];
            state.isLoading = false;
            state.isError = true;
         });
   }
});

export { getProducts };
export default productsSlice.reducer;
