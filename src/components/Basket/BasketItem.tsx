import React from 'react';
import { TProduct } from '../../types';

type TBasketItemProps = {
   product: TProduct;
};

export default function BasketItem(props: TBasketItemProps) {
   const { product } = props;

   return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
         <p>{product.name}</p>
         <p>{product.price} $</p>
         <p>{product.count}</p>
      </div>
   );
}
