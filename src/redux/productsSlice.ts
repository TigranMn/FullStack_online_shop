import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TProduct, TProductState } from '../types';
import { getProducts } from '../api/api';

const initialState: TProductState = {
   isLoading: true,
   isError: false,
   products: []
};

const fetchProducts = createAsyncThunk('products/fetchPageProducts', async (category: string) => {
   const result: TProduct[] = [];
   const data = await getProducts(category);

   data.forEach((doc) => {
      const [id, { name, count, gender, imgUrl, price, views, brand, quantity }] = [
         doc.id,
         doc.data()
      ];
      result.push({
         id,
         name,
         count,
         gender,
         imgUrl,
         category,
         price,
         views,
         brand,
         quantity
      });
   });
   if (!result.length) {
      throw new Error('Something went wrong');
   }
   return result;
});

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
         })
         .addCase(fetchProducts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.products = [];
            state.isLoading = false;
            state.isError = true;
         });
   }
});

export { fetchProducts };
export default productsSlice.reducer;
