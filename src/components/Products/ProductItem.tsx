//Hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiked } from '../../hooks/useLiked';
import { useNotify } from '../../hooks/useNotify';
import { useAppDispatch, useAppSelector } from '../../store';
//Types
import { notificationTypes, TProduct } from '../../types';
//Mui
import { Button, Grid, Typography,Icon } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import {
   Product,
   ProductActionButton,
   ProductBox,
   ProductCard,
   ProductContent,
   ProductImages,
   ProductLikedIcon,
   ProductName,
   ProductPrice
} from './styles';
//Actions
import { addProduct, dislikeProduct, likeProduct } from '../../redux/userSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from 'react-i18next';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
type ProductItemProps = {
   product: TProduct;
};

export default function ProductItem({ product }: ProductItemProps) {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const userId = useAppSelector((state) => state.user.id);
   const isLogged = useAppSelector((state) => state.user.isLogged);
   const likedProducts = useAppSelector((state) => state.user.likedProducts);
   const basket = useAppSelector((state) => state.user.basket);
   const notify = useNotify();
   const liked = useLiked(likedProducts, product.id);
   const [isLiked, setIsLiked] = useState<boolean>(liked);
   const { t } = useTranslation();
   const [activeButton, setActiveButton] = useState(false);

   const inBasket = basket.find((el) => el.productId === product.id)?.count || 0;

   useEffect(() => {
      localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
      let timeoutID:any;
      if(activeButton) {
             timeoutID = setTimeout(()=>{
               setActiveButton(false);
            },2000);
      }
      return ()=>{
         clearTimeout(timeoutID);
      };
   }, [likedProducts,activeButton]);

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
            setActiveButton(true);
      } else {
         notify(notificationTypes.WARNING, 'You must be logged in!');
      }
   };



   return (
      <>
         <Grid item key={product?.id}>
            <Product>
               <ProductCard>
                  <ProductBox>
                     <ProductImages
                        onClick={changeLocation}
                        src={product.imgUrl}
                        alt='productImg'
                     />
                  </ProductBox>
                  <ProductContent>
                     <ProductName>{product.name}</ProductName>
                     <ProductPrice>{product.price}$</ProductPrice>
                     {product.quantity ? (
                        <ProductActionButton
                           className={`productButton ${activeButton ? 'cartClicked' : ''}`}
                           disableRipple
                           disabled={product.quantity - inBasket <= 0}
                           onClick={handleAdd}
                        >
                           <Typography component={'span'} className='add-cart-span'>{t('addToCard')}</Typography>
                           <Typography component={'span'} className='added-cart-span'>added</Typography> 
                           <Icon className='add-cart-icon'>< ShoppingCartIcon /></Icon>
                        </ProductActionButton>
                     ) : (
                        <ProductActionButton
                           disableRipple
                           style={{
                              backgroundColor: 'grey',
                              color: 'white',
                              cursor: 'default'
                           }}
                        >
                           {t('expired')}
                        </ProductActionButton>
                     )}
                  </ProductContent>
                  <ProductLikedIcon>
                     {!isLiked ? (
                        <Button
                           disableRipple
                           size='large'
                           onClick={handleLike}
                           sx={{
                              '&:hover': { backgroundColor: 'transparent' },
                              position: 'absolute',
                              bottom: '10px',
                              zIndex: 9999999999,
                              color: 'white'
                           }}
                           startIcon={<FavoriteIcon />}
                        ></Button>
                     ) : (
                        <Button
                           disableRipple
                           size='large'
                           onClick={handleDislike}
                           sx={{
                              position: 'absolute',
                              bottom: '10px',
                              zIndex: 9999999999,
                              color: 'red'
                           }}
                           startIcon={<FavoriteIcon />}
                        ></Button>
                     )}
                  </ProductLikedIcon>
               </ProductCard>
            </Product>
         </Grid>
      </>
   );
}
