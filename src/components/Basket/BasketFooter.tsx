//MUI
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type TBasketFooter = {
   totalPrice: number;
};

function BasketFooter({ totalPrice }: TBasketFooter) {
   const { t } = useTranslation();

   return (
      <div
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '50px'
         }}
      >
         <h4>
            {t('totalPrice')} {' : '}
            <span style={{ color: '#238636' }}>{totalPrice} $</span>
         </h4>
         <Button variant='contained'>{t('buy')}</Button>
      </div>
   );
}

export default BasketFooter;
