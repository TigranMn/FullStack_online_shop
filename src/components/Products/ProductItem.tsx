import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { notificationTypes, TProduct } from '../../types';
import { Grid } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
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

type ProductItemProps = {
   product: TProduct;
   toast: (type: notificationTypes, message: string) => void;
};

export default function ProductItem({ product, toast }: ProductItemProps) {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();
   const user = useAppSelector((state) => state.user);

   const changeLocation = () => {
      navigate(pathname + `/${product.id}`);
   };

   const handleAdd = async () => {
      if (user.isLogged) {
         const resp = await dispatch(
            addProduct({
               productId: product.id,
               userId: user?.id,
               category: product.category
            } as { productId: string; userId: string; category: string })
         );
         console.log(resp);
         //check response
         toast(notificationTypes.SUCCES, 'Succesfully added');
      } else {
         toast(notificationTypes.WARNING, 'You must be logged in');
      }
   };

   return (
      <>
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
      </>
   );
}
