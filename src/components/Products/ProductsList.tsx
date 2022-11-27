import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from '../../redux/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function ProductsList() {
   const { category } = useParams();

   const state = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getProducts(category));
   }, [dispatch]);

   return (
      <Container
         sx={{
            pt: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4
         }}
      >
         {state.isLoading && (
            <Box sx={{ display: 'flex' }}>
               <CircularProgress />
            </Box>
         )}
         {state.isError ? (
            <span>Something went wrong</span>
         ) : (
            state.products.map((product) => {
               return <ProductItem key={product.id} product={product} />;
            })
         )}
      </Container>
   );
}
