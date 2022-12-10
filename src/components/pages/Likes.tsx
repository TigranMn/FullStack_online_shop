import React, { useEffect, useState } from 'react';
import { getProduct } from '../../api/api';
import { useAppSelector } from '../../store';
import { notificationTypes, TProduct } from '../../types';
import { useNotify } from '../../hooks/useNotify';
import ProductItem from '../Products/ProductItem';
import CircularProgress from '@mui/material/CircularProgress';

export default function Likes() {
   const likedProducts = useAppSelector((state) => state.user.likedProducts);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [products, setProducts] = useState<TProduct[]>([]);
   const [error, setError] = useState<boolean>(false);
   const notify = useNotify();

   useEffect(() => {
      setIsLoading(true);
      const promises = likedProducts.map(async (el) => {
         const product = await getProduct(el.category, el.productId);
         return { ...product, id: el.productId, category: el.category };
      });
      Promise.all(promises)
         .then((res) => {
            setProducts(res);
            setIsLoading(false);
         })
         .catch((e) => {
            setError(true);
            setIsLoading(false);
            notify(notificationTypes.ERROR, e.message);
         });
   }, []);

   return (
      <>
         {isLoading ? (
            <CircularProgress />
         ) : error ? (
            <span>Something went wrong</span>
         ) : products.length ? (
            products.map((el) => {
               return <ProductItem key={el.id} product={el} />;
            })
         ) : (
            <p>Nothing in liked</p>
         )}
      </>
   );
}
