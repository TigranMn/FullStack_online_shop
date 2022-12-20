//Hooks
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { useNotify } from '../../hooks/useNotify';
//MUI
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Box } from '@mui/material';
//Utils
import { getProduct } from '../../api/api';
//Types
import { notificationTypes, TProduct } from '../../types';
//Components
import ProductItem from '../Products/ProductItem';

export default function Likes() {
   const likedProducts = useAppSelector((state) => state.user.likedProducts);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [products, setProducts] = useState<TProduct[]>([]);
   const [error, setError] = useState<boolean>(false);
   const notify = useNotify();

   useEffect(() => {
      const promises = likedProducts.map(async (el) => {
         const product = await getProduct(el.category, el.productId);
         return { ...product, id: el.productId, category: el.category };
      });
      Promise.all(promises)
         .then((res) => {
            setProducts(res);
            setIsLoading(false);
            setError(false);
         })
         .catch((e) => {
            setError(true);
            setIsLoading(false);
            notify(notificationTypes.ERROR, e.message);
         });
   }, []);

   return (
      <Box sx={{minHeight :'100vh', background: '#f2f2f2'}}>
      <Container sx={{minHeight :'100vh', background: '#f2f2f2'}}>
         <Box
            sx={{
               display: 'flex',
               flexWrap: 'wrap',
               gap: '30px',
               justifyContent: 'center',
               alignItems: 'center'
            }}
         >
            {isLoading ? (
               <CircularProgress />
            ) : error ? (
               <span>Something went wrong</span>
            ) : products.length ? (
               products.map((el) => {
                  return <ProductItem key={el.id} product={el} />;
               })
            ) : (
               <h2 style={{ width: '100%', textAlign: 'center' }}>Nothing in liked</h2>
            )}
         </Box>
      </Container>
      </Box>
   );
}
