import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TProduct } from '../../types';

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
         <h3>{product.price}$</h3>
      </div>
   );
}
