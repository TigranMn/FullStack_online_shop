//MUI
import { Button } from '@mui/material';

type TBasketFooter = {
   totalPrice: number;
};

function BasketFooter({ totalPrice }: TBasketFooter) {
   return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop : '50px'}}>
         <h4>Total price <span style={{ color : '#238636'}}>{totalPrice} $</span></h4>
         <Button variant='contained'>Buy</Button>
      </div>
   );
}

export default BasketFooter;
