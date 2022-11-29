import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { TProduct } from '../../types';

function Product() {
   const { productId, category } = useParams();
   const [product, setProduct] = useState<TProduct>();

   useEffect(() => {
      getProduct(category as string, productId as string).then((res) => {
         setProduct(res);
      });
   }, []);

   return <h2>{product?.name}</h2>;
}

export default Product;
