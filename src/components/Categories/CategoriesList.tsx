import React, { useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { getCategories } from '../../redux/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from "@mui/material"

export default function CategoriesList() {
   const state = useAppSelector((state) => state.categories);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   const theme = useTheme()
   const matches = useMediaQuery(theme.breakpoints.down("md"))

   return (
      <Container>
         <Grid container justifyContent="center" sx={{margin: "20px 4px 10px 4px"}}>
         {state.isLoading && (
            <Box sx={{ display: 'flex' }}>
               <CircularProgress />
            </Box>
         )}
         {state.isError ? (
            <Typography variant='h3'>Something went wrong</Typography>
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
         </Grid>
      </Container>
   );
}
