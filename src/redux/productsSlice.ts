import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct, TProductState } from '../types';
import getData from '../api/api';

const initialState: TProductState = {
   isLoading: false,
   isError: false,
   products: []
};

const getProducts = createAsyncThunk(
   'products/fetchProducts',
   async (category: string | undefined) => {
      let result: TProduct[] = [];
      let data = await getData('/' + category);

      data.forEach((doc) => {
         const [id, { name, count, gender, imgUrl, price }] = [
            doc.id,
            doc.data()
         ];
         result.push({ id, name, count, gender, imgUrl, price });
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
            state.products = [];
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
