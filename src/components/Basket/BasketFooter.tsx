import { Button } from '@mui/material';
import React from 'react';

type TBasketFooter = {
   totalPrice: number;
};

function BasketFooter({ totalPrice }: TBasketFooter) {
   return (
      <div>
         <span>{totalPrice} $</span>
         <Button variant="contained">Buy</Button>
      </div>
   );
}

export default BasketFooter;
