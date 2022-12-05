import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TProduct } from '../../types';
import { Grid } from '@mui/material';
import {
   Product,
   ProductActionButton,
   ProductBox,
   ProductContent,
   ProductImages,
   ProductName,
   ProductPrice
} from './styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { addProduct } from '../../redux/userSlice';
import { stringify } from 'querystring';

type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();
   const user = useAppSelector((state) => state.user);

   const changeLocation = () => {
      navigate(pathname + `/${product.id}`);
   };
   const handleAdd = () => {
      dispatch(
         addProduct({
            productId: product.id,
            userId: user.id,
            category: product.category
         } as { productId: string; userId: string; category: string })
      );
   };

   return (
      <Grid item key={product?.id}>
         <Product>
            <ProductBox>
               <ProductImages
                  onClick={changeLocation}
                  src={product.imgUrl}
                  alt="productImg"
               />
            </ProductBox>
            <ProductContent>
               <ProductName>{product.name}</ProductName>
               <ProductPrice>{product.price}$</ProductPrice>
               <ProductActionButton onClick={handleAdd}>
                  {' '}
                  Add to cart
               </ProductActionButton>
            </ProductContent>
         </Product>
      </Grid>
   );
}
