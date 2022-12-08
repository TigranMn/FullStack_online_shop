import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { notificationTypes, TProduct } from '../../types';
import {
   ProductContainer,
   ProductContent,
   ProductImage,
   ProductTitle
} from '../../styles/styles';
import { Typography, Stack, Button, Box } from '@mui/material';
import { useNotify } from '../../hooks/useNotify';

function Product() {
   const { productId, category } = useParams();
   const [product, setProduct] = useState<TProduct>(undefined!);
   const [quantity, setQuantity] = useState<number>(0);
   const notify = useNotify();

   const incrDisabled = quantity >= +product?.quantity;
   const decrDisabled = quantity <= 0;

   useEffect(() => {
      getProduct(category as string, productId as string)
         .then((res) => {
            setProduct(res);
         })
         .catch((e) => notify(notificationTypes.ERROR, e.message));
   }, []);

   const decreaseQuantity = () => {
      setQuantity(quantity - 1);
   };

   const increaseQuantity = () => {
      setQuantity(quantity + 1);
   };

   return (
      <ProductContainer>
         <ProductImage src={product?.imgUrl} />
         <ProductContent>
            <ProductTitle>{product?.name}</ProductTitle>
            <Typography variant="h6">
               Brand :{' '}
               <Box sx={{ color: 'rgb(87,153,239)', display: 'inline-block' }}>
                  {' '}
                  {product?.brand}
               </Box>
            </Typography>
            <Typography variant="h6">
               Gender :{' '}
               <Box sx={{ color: 'rgb(87,153,239)', display: 'inline-block' }}>
                  {product?.gender}
               </Box>{' '}
            </Typography>
            <Typography variant="h6">
               Price :{' '}
               <Box sx={{ color: 'rgb(87,153,239)', display: 'inline-block' }}>
                  {product?.price} $
               </Box>
            </Typography>
            <Typography variant="h6">
               Available :{' '}
               <Box sx={{ color: 'rgb(87,153,239)', display: 'inline-block' }}>
                  {product?.quantity}
               </Box>{' '}
            </Typography>
            <Box>
               <Button
                  disabled={decrDisabled}
                  onClick={decreaseQuantity}
                  size="small"
                  variant="text"
                  sx={{
                     background: decrDisabled ? 'grey' : 'rgb(255,99,71)',
                     color: 'white',
                     '&:hover': { background: 'rgba(255,99,71,0.8)' }
                  }}
               >
                  -
               </Button>
               <Typography sx={{ display: 'inline-block', padding: '5px' }}>
                  {quantity}
               </Typography>
               <Button
                  disabled={incrDisabled}
                  onClick={increaseQuantity}
                  size="small"
                  variant="text"
                  sx={{
                     background: incrDisabled ? 'grey' : 'rgb(103,173,75)',
                     color: 'white',
                     '&:hover': { background: 'rgba(103,173,75,0.8)' }
                  }}
               >
                  +
               </Button>
            </Box>
            <Box sx={{ mt: '10px' }}>
               <Button variant="outlined">Add to cart</Button>
            </Box>
         </ProductContent>
      </ProductContainer>
   );
}

export default Product;
