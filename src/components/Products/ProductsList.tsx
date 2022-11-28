import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts, getSize } from '../../redux/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { Container, Grid, Typography } from '@mui/material';
import { Pagination } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from "@mui/material"



export default function ProductsList() {
   const { category } = useParams();
   const state = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();
   const [currentPage, setCurrentPage] = useState<number>(1);

   useEffect(() => {
      dispatch(getSize(category));
   }, []);

   const theme = useTheme()
   const matches = useMediaQuery(theme.breakpoints.down("md"))
 

   useEffect(() => {
      dispatch(getProducts({ category, currentPage }));
   }, [dispatch, currentPage]);

   return (
      
      <Container>
         <Grid container justifyContent="center" sx={{margin: "20px 4px 20px 4px"}}>
            <Grid container display={"flex"} gap={"120px"} justifyContent="center" marginBottom={"2rem"}>
         {state.isLoading && (
               <Box sx={{ display: 'flex' }}>
                  <CircularProgress sx={{ width: '100%' }} />
               </Box>
         )}
         {state.isError && <Typography>Something went wrong</Typography>}
         {!state.isLoading && (
               state.products.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
               })
         )}
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
