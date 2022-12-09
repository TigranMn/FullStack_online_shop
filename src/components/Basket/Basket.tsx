import { ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getProduct } from '../../api/api';
import { useAppSelector } from '../../store';
import { TProduct } from '../../types';
import BasketItem from './BasketItem';

export default function Basket() {
   const basketItems = useAppSelector((state) => state.user.basket);
   const [products, setProducts] = useState<TProduct[]>([]);

   useEffect(() => {
      const prods: TProduct[] = [];
      basketItems.forEach(async (el) => {
         const product = await getProduct(el.category, el.productId);
         prods.push(product);
      });
      setProducts(prods);
   }, [basketItems]);

   return (
      <>
         {true ? (
            products.map((el) => {
               return (
                  <ListItem>
                     <p key={el.id}>{el.brand}</p>
                  </ListItem>
               );
            })
         ) : (
            <p>Nothing in basket</p>
         )}
      </>
   );
}
