import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { fetchPageProducts, getSize } from '../../redux/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { Container, Grid, Typography, Pagination, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductsList() {
   const { category } = useParams();
   const [itemCount, setItemCount] = useState<number>(6);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const state = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(
         getSize({ category, itemCount } as {
            category: string;
            itemCount: number;
         })
      );
   }, [itemCount]);

   useEffect(() => {
      dispatch(
         fetchPageProducts({ category, currentPage, itemCount } as {
            category: string;
            currentPage: number;
            itemCount: number;
         })
      );
   }, [dispatch, currentPage, itemCount]);

   return (
      <Container>
         {/* NEED TO ADD SELECT TO CHANGE ITEM COUNT */}
         {/* <button onClick={() => setItemCount(12)}>Sxmenq vren</button> */}
         <Grid
            container
            justifyContent="center"
            sx={{ margin: '20px 4px 20px 4px' }}
         >
            <Grid
               container
               display={'flex'}
               spacing={{xs:2, md:16}}
               justifyContent="center"
               marginBottom={'2rem'}
            >
               {state.isLoading && (
                  <Box sx={{ display: 'flex' }}>
                     <CircularProgress sx={{ width: '100%' }} />
                  </Box>
               )}
               {state.isError && <Typography>Something went wrong</Typography>}
               {!state.isLoading &&
                  state.products.map((product) => {
                     return <ProductItem key={product.id} product={product} />;
                  })}
            </Grid>
            <Pagination
               shape="rounded"
               showFirstButton
               showLastButton
               variant="outlined"
               onChange={(_, page) => {
                  setCurrentPage(page);
               }}
               count={state.pages}
            />
         </Grid>
      </Container>
   );
}
