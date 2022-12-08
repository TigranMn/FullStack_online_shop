import React from 'react';
import { TProduct } from '../../types';

type TBasketItemProps = {
   product: TProduct;
};

export default function BasketItem(props: TBasketItemProps) {
   const { product } = props;

   return (
      <div>
         <p>{product.name}</p>
         <p>{product.price}</p>
      </div>
   );
}
