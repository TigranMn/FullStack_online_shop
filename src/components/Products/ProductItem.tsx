import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TProduct } from '../../types';
import { Button, Grid, TextField } from '@mui/material';
import { Product, ProductBox, ProductContent, ProductImages, ProductName, ProductPrice } from './styles';


type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const changeLocation = () => {
      navigate(pathname + `/${product.id}`);
   };

   return (
         <Grid item key={+product.id}  onClick={changeLocation} >
            <Product>
               <ProductBox>
                  <ProductImages src={product.imgUrl} alt="productImg" />
               </ProductBox>
               <ProductContent>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price} &#36;</ProductPrice>
               </ProductContent>
            </Product>
         {/* <Button
            variant="contained"
            sx={{
               color: 'white',
               backgroundColor: 'green',
               margin: '15px'
            }}
         >
            ADD
         </Button> */}
         </Grid>
   );
}
