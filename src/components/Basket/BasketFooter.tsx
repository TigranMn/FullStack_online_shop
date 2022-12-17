//MUI
import { Button } from '@mui/material';

type TBasketFooter = {
   totalPrice: number;
};

function BasketFooter({ totalPrice }: TBasketFooter) {
   return (
      <div>
         <span>{totalPrice} $</span>
         <Button variant='contained'>Buy</Button>
      </div>
   );
}

export default BasketFooter;
