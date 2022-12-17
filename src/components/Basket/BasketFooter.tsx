//MUI
import { Button } from '@mui/material';

type TBasketFooter = {
   totalPrice: number;
};

function BasketFooter({ totalPrice }: TBasketFooter) {
   return (
      <div style={{display: 'flex', alignItems: 'center',  justifyContent: 'flex-end', flexDirection: 'column'}}>
         <span>Total price {totalPrice} $</span>
         <Button variant='contained'>Buy</Button>
      </div>
   );
}

export default BasketFooter;
