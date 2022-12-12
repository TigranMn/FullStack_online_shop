import {
   MyList,
   ActionIconsContainerMobile,
   ActionIconsContainerDesktop,
   StyledBadge
} from './styles';
import { IconButton, ListItemButton, ListItemIcon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import { Colors } from '../../styles/Theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useAuth } from '../../hooks/use-auth';
import PersonIcon from '@mui/icons-material/Person';
import Basket from '../Basket/Basket';
import { useAppSelector } from '../../store';
import React from 'react';

const Actions = ({ matches }) => {
   const navigate = useNavigate();
   const [isActive, setIsActive] = useState(false);
   const productsLength = useAppSelector((state) => state.user?.basket?.length);
   const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

   return (
      <Component>
         <div>
            <Drawer anchor={'right'} open={isActive} onClose={() => setIsActive(false)}>
               <Box sx={{ width: '500px', padding: '15px' }}>
                  <Box>Products</Box>
                  <Basket sx={{ color: 'white' }} />
               </Box>
            </Drawer>
         </div>
         <MyList type="row">
            <ListItemButton onClick={() => setIsActive(true)} sx={{ justifyContent: 'center' }}>
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
               >
                  <IconButton aria-label="cart">
                     <StyledBadge badgeContent={productsLength} color="secondary">
                        <ShoppingCartIcon sx={{ color: 'white' }} />
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
                  <FavoriteIcon sx={{ color: 'white' }} />
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
                     <PersonIcon sx={{ color: 'white' }} />
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
                     <LoginIcon />
                  </ListItemIcon>
               </ListItemButton>
            )}
         </MyList>
      </Component>
   );
};

export default Actions;
