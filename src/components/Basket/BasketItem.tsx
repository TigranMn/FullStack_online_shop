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
            width: '100%',
            height: '120px',
            overflow: 'hidden',
            marginBottom: '10px',
            background: '#fff',
            transition: 'all .6s ease',
            boxShadow: ' #212834 0 7px 18px 0',
            position: 'relative',
            borderRadius: '8px',
            padding: '5px',
            border: '2px solid #212834',
         }}
      >
         <Box>
            <img width='190px' height='120px' style={{objectFit: 'cover'}}  src={product.imgUrl} alt='itemImage' />
         </Box>
         <Box sx={{padding: '20px', position: 'relative', width:'100%'}}>
            <h3 style={{marginBottom: '5px'}}>{product.name}</h3>
            <h4 style={{marginBottom: '10px'}}> Price : $ {product.price} </h4>
            <p className='unit'> Quantity : <input  value={product.count} style={{width:'35px', padding:'3px', textAlign:'center'}}/> </p>
         </Box>
         <Tooltip onClick={() => handleRemove(product.id)} title='Delete'>
            <IconButton sx={{position:'absolute', bottom: '3px', right:'10px'}}>
               <DeleteIcon  />
            </IconButton>
         </Tooltip>
      </div>
   );
}
