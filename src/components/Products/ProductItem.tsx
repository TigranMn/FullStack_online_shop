import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TProduct } from '../../types';
import { Button } from '@mui/material';

type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const changeLocation = () => {
      navigate(pathname + `/${product.id}`);
   };

   return (
      <div onClick={changeLocation} key={+product.id} className="product">
         <img src={product.imgUrl} alt="AHAHAHAHA" />
         <h1>{product.name}</h1>
         <span>{product.price}$</span>
         <Button
            variant="contained"
            sx={{
               color: 'white',
               backgroundColor: 'green',
               margin: '15px'
            }}
         >
            ADD
         </Button>
      </div>
   );
}
