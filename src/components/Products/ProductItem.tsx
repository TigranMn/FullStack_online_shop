import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { addProduct, addToBasket, dislikeProduct, likeProduct } from '../../redux/userSlice';
import { useNotify } from '../../hooks/useNotify';
import { useLiked } from '../../hooks/useLiked';

type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();
   const userId = useAppSelector((state) => state.user.id);
   const isLogged = useAppSelector((state) => state.user.isLogged);
   const likedProducts = useAppSelector((state) => state.user.likedProducts);
   const notify = useNotify();
   const liked = useLiked(likedProducts, product.id);

   const changeLocation = () => {
      navigate(pathname + `/${product.id}`);
   };

   const handleLike = () => {
      dispatch(
         likeProduct({ productId: product.id, userId } as {
            productId: string;
            userId: string;
         })
      )
         .unwrap()
         .then(() => notify(notificationTypes.SUCCES, 'Added'))
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
         .then(() => notify(notificationTypes.SUCCES, 'Deleted'))
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
            .then(() => dispatch(addToBasket({ ...newProduct, count: 1 })))
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
                     <ProductActionButton onClick={handleAdd}>Add to cart</ProductActionButton>
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
               {liked ? (
                  <button onClick={handleDislike}>Dislike</button>
               ) : (
                  <button onClick={handleLike}>Like</button>
               )}
            </Product>
         </Grid>
      </>
   );
}
