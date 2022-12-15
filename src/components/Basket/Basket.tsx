//Hooks
import { useEffect, useState } from 'react';
import { useNotify } from '../../hooks/useNotify';
//MUI
import { CircularProgress } from '@mui/material';
//Utils
import { getProduct } from '../../api/api';
//Redux
import { removeProduct } from '../../redux/userSlice';
import { useAppDispatch, useAppSelector } from '../../store';
//Types
import { notificationTypes, TProduct } from '../../types';
//Components
import BasketFooter from './BasketFooter';
import BasketItem from './BasketItem';

export default function Basket() {
   const basketItems = useAppSelector((state) => state.user.basket);
   const [products, setProducts] = useState<TProduct[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);
   const notify = useNotify();
   const dispatch = useAppDispatch();
   const userId = useAppSelector((state) => state.user.id);

   useEffect(() => {
      setIsLoading(true);
      const promises = basketItems.map(async (el) => {
         const product = await getProduct(el.category, el.productId);
         return { ...product, id: el.productId, count: el.count };
      });
      Promise.all(promises)
         .then((res) => {
            setProducts(res);
            setIsLoading(false);
         })
         .catch((e) => {
            setError(true);
            setIsLoading(false);
            notify(notificationTypes.ERROR, e.message);
         });
   }, [basketItems]);

   const totalPrice = products.reduce((accm, curr) => accm + curr.price, 0);

   async function handleRemove(id: string) {
      await dispatch(
         removeProduct({ productId: id, userId: userId } as {
            productId: string;
            userId: string;
         })
      )
         .unwrap()
         .then(() => {
            setProducts(products.filter((el) => el.id !== id));
         })
         .catch((e) => notify(notificationTypes.ERROR, e.message));
   }

   return (
      <>
         {isLoading ? (
            <CircularProgress />
         ) : error ? (
            <span>Something went wrong</span>
         ) : products.length ? (
            products.map((el) => {
               return <BasketItem handleRemove={handleRemove} key={el.id} product={el} />;
            })
         ) : (
            <p>Nothing in basket</p>
         )}
         <BasketFooter totalPrice={totalPrice} />
      </>
   );
}
