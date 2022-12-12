import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notificationTypes, TProduct } from '../../types';
import { Grid } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import {
   Product,
   ProductActionButton,
   ProductBox,
   ProductContent,
   ProductImages,
   ProductName,
   ProductPrice
} from './styles';
import { useAppDispatch, useAppSelector } from '../../store';
import { addProduct, dislikeProduct, likeProduct } from '../../redux/userSlice';
import { useNotify } from '../../hooks/useNotify';
import { useLiked } from '../../hooks/useLiked';

type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const userId = useAppSelector((state) => state.user.id);
   const isLogged = useAppSelector((state) => state.user.isLogged);
   const likedProducts = useAppSelector((state) => state.user.likedProducts);
   const basket = useAppSelector(state => state.user.basket);
   const notify = useNotify();
   const liked = useLiked(likedProducts, product.id);
   const [isLiked, setIsLiked] = useState<boolean>(liked);

   const inBasket = basket.find((el) => el.productId === product.id)?.count || 0;

   useEffect(() => {
      localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
   }, [likedProducts]);

   const changeLocation = () => {
      navigate('/shop/' + product.category + `/${product.id}`);
   };

   const handleLike = () => {
      dispatch(
         likeProduct({ productId: product.id, userId, category: product.category } as {
            productId: string;
            userId: string;
            category: string;
         })
      )
         .unwrap()
         .then(() => setIsLiked(!isLiked))
         .catch((e) => notify(notificationTypes.ERROR, e.message));
   };

   const handleDislike = () => {
      dispatch(
         dislikeProduct({ productId: product.id, userId } as {
            productId: string;
            userId: string;
         })
      )
         .unwrap()
         .then(() => setIsLiked(!isLiked))
         .catch((e) => notify(notificationTypes.ERROR, e.message));
   };

   const handleAdd = async () => {
      if (isLogged) {
         const newProduct = {
            productId: product.id,
            userId,
            category: product.category
         } as { productId: string; userId: string; category: string };
         await dispatch(addProduct({ ...newProduct, count: 1 }))
            .unwrap()
            .then(() => notify(notificationTypes.SUCCES, 'Successfully added'))
            .catch((e) => notify(notificationTypes.ERROR, e.message));
      } else {
         notify(notificationTypes.WARNING, 'You must be logged in!');
      }
   };

   return (
      <>
         <Grid item key={product?.id}>
            <Product>
               <ProductBox>
                  <ProductImages onClick={changeLocation} src={product.imgUrl} alt="productImg" />
               </ProductBox>
               <ProductContent>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.price}$</ProductPrice>
                  {product.quantity ? (
                     <ProductActionButton disabled= {product.quantity - inBasket <= 0} onClick={handleAdd}>Add to cart</ProductActionButton>
                  ) : (
                     <ProductActionButton
                        disableRipple
                        style={{
                           backgroundColor: 'grey',
                           color: 'white',
                           cursor: 'default'
                        }}
                     >
                        Expired
                     </ProductActionButton>
                  )}
               </ProductContent>
               {isLiked ? (
                  <button onClick={handleDislike}>Dislike</button>
               ) : (
                  <button onClick={handleLike}>Like</button>
               )}
            </Product>
         </Grid>
      </>
   );
}
