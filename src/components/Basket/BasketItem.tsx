//MUI
import { Box, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { TProduct } from '../../types';

type TBasketItemProps = {
   product: TProduct;
   handleRemove: (id: string) => void;
};

export default function BasketItem(props: TBasketItemProps) {
   const { product, handleRemove } = props;

   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '1px solid black',
            padding: '10px'
         }}
      >
         <Box>
            <p>{product.name}</p>
            <p>{product.price} $</p>
            <p>{product.count}</p>
         </Box>
         <Tooltip onClick={() => handleRemove(product.id)} title='Delete'>
            <IconButton>
               <DeleteIcon />
            </IconButton>
         </Tooltip>
      </div>
   );
}
