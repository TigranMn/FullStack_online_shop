//MUI
import { IconButton, ListItemButton, ListItemIcon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
//Styles
import { Colors } from '../../styles/Theme';
import {
   MyList,
   ActionIconsContainerMobile,
   ActionIconsContainerDesktop,
   StyledBadge
} from './styles';
//Hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useAppSelector } from '../../store';
//Components
import Basket from '../Basket/Basket';

const Actions = ({ matches }) => {
   const navigate = useNavigate();
   const [isActive, setIsActive] = useState(false);
   const productsLength = useAppSelector((state) => state.user?.basket?.length);
   const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

   const setBasketActive = () => {
      setIsActive(true);
   };

   return (
      <Component>
         <div>
            <Drawer anchor={'right'} open={isActive} onClose={() => setIsActive(false)}>
               <Box sx={{ width: '500px', padding: '15px' }}>
                  <Box>Products</Box>
                  <Basket />
               </Box>
            </Drawer>
         </div>
         <MyList type='row'>
            <ListItemButton onClick={setBasketActive} sx={{ justifyContent: 'center' }}>
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
               >
                  <IconButton aria-label='cart'>
                     <StyledBadge badgeContent={productsLength} color='secondary'>
                        <ShoppingCartIcon sx={{ color: '#5082FC' }} />
                     </StyledBadge>
                  </IconButton>
               </ListItemIcon>
            </ListItemButton>
            <ListItemButton
               onClick={() => {
                  navigate('/liked');
               }}
               sx={{ justifyContent: 'center' }}
            >
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
               >
                  <FavoriteIcon sx={{ color: '#5082FC' }} />
               </ListItemIcon>
            </ListItemButton>
            {useAuth().isAuth ? (
               <ListItemButton
                  sx={{ justifyContent: 'center' }}
                  onClick={() => {
                     navigate('/user');
                  }}
               >
                  <ListItemIcon
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.info
                     }}
                  >
                     <PersonIcon sx={{ color: '#5082FC' }} />
                  </ListItemIcon>
               </ListItemButton>
            ) : (
               <ListItemButton
                  sx={{ justifyContent: 'center' }}
                  onClick={() => {
                     navigate('/login');
                  }}
               >
                  <ListItemIcon
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.info
                     }}
                  >
                     <LoginIcon sx={{ color: '#5082FC' }} />
                  </ListItemIcon>
               </ListItemButton>
            )}
         </MyList>
      </Component>
   );
};

export default Actions;

// #805AD5
