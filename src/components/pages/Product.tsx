import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { TProduct } from '../../types';
import { ProductContainer, ProductContent,  ProductImage, ProductTitle } from './styles';
import {  Typography ,Stack, Button ,Box} from '@mui/material';


function Product() {
   const { productId, category } = useParams();
   const [product, setProduct] = useState<TProduct>();
   const [quantity, setQuantity] = useState<number>(0);

   useEffect(() => {
      getProduct(category as string, productId as string).then((res) => {
         setProduct(res);
      });
   }, []);

const increaseQuantity = () => {
   if( product?.quantity !== undefined) {
      const maxValue = +product.quantity
      if(quantity > 0 && quantity < maxValue){
      setQuantity(quantity - 1)
   }
   }
}


const decreaseQuantity = () => {
   if( product?.quantity !== undefined) {
      const maxValue = +product.quantity
      if(quantity >= 0 && quantity < maxValue){
      setQuantity(quantity + 1)
   }
   }
}

   return (
            <ProductContainer>
               <ProductImage src={product?.imgUrl} />
               <ProductContent>
                  <ProductTitle>{product?.name}</ProductTitle>
                  <Typography  variant='h6'>Brand : <Box sx={{color: "rgb(87,153,239)", display:"inline-block"}}> {product?.brand}</Box></Typography>
                  <Typography variant='h6'>Gender : <Box sx={{color: "rgb(87,153,239)", display:"inline-block"}}>{product?.gender}</Box>  </Typography>
                  <Typography variant='h6'>Price : <Box sx={{color: "rgb(87,153,239)", display:"inline-block"}}>{product?.price} $</Box></Typography>
                  <Typography variant='h6'>Available : <Box sx={{color: "rgb(87,153,239)", display:"inline-block"}}>{product?.quantity}</Box> </Typography>
                  <Box>
                     <Button  onClick={increaseQuantity} size="small" variant='text' sx={{background : "tomato", color: "white" }}>-</Button>
                     <Typography sx={{display :"inline-block", padding : "5px"}} >{quantity}</Typography>
                     <Button onClick={decreaseQuantity}  size="small" variant='text' sx={{background : "rgb(103,173,75)", color: "white"}}>+</Button>
                  </Box>
                  <Box sx={{mt : "10px"}}><Button variant="outlined">Add to cart</Button></Box>
               </ProductContent>
            </ProductContainer>
   );
}

export default Product;

