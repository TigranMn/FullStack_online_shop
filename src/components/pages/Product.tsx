import React from 'react';
import { useParams } from 'react-router-dom';
import { TProduct } from '../../types';

function Product() {
   const { productId } = useParams();

   return <h2>product</h2>;
}

export default Product;
