import React, { useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { getCategories } from '../../redux/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function CategoriesList() {
   const state = useAppSelector((state) => state.categories);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   return (
      <Container sx={{ pt: '20px' }}>
         {state.isLoading && (
            <Box sx={{ display: 'flex' }}>
               <CircularProgress />
            </Box>
         )}
         {state.isError ? (
            <span>Something went wrong</span>
         ) : (
            state.categories.map((el) => {
               return (
                  <CategoryItem
                     key={Math.random()}
                     category={el.name}
                  ></CategoryItem>
               );
            })
         )}
      </Container>
   );
}
