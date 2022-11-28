import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from '../../redux/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { Container } from '@mui/material';
import { Pagination } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function ProductsList() {
   const { category } = useParams();
   const state = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      dispatch(getProducts({ category, currentPage }));
   }, [dispatch, currentPage]);

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
            <div className="productList">
               <Box sx={{ display: 'flex' }}>
                  <CircularProgress sx={{ width: '100%' }} />
               </Box>
            </div>
         )}
         {state.isError && <span>Something went wrong</span>}
         {!state.isLoading && (
            <div className="productList">
               {state.products.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
               })}
            </div>
         )}
         <Pagination
            onChange={(_, page) => {
               setCurrentPage(page);
            }}
            count={state.pages}
         />
      </Container>
   );
}
