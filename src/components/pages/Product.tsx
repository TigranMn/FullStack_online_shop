import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { TProduct } from '../../types';

function Product() {
   const { productId, category } = useParams();
   const [product, setProduct] = useState<TProduct>({
      id: null,
      price: null,
      name: null,
      gender: null,
      imgUrl: undefined,
      count: null,
      views: null
   });

   useEffect(() => {
      getProduct(category as string, productId as string).then((res) => {
         setProduct(res);
      });
   }, []);

   return (
      <div>
         <img width={'200px'} src={product?.imgUrl} alt="ahahahahahaha" />
         <h2>{product?.name}</h2>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            sapiente suscipit voluptatibus. Sed labore sint maxime explicabo
            neque et commodi?
         </p>
      </div>
   );
}

export default Product;
