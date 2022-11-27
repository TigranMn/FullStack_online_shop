import {
   MyList,
   ActionIconsContainerMobile,
   ActionIconsContainerDesktop
} from './styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import { Colors } from '../../styles/Theme';
import { useNavigate } from 'react-router-dom';

const Actions = ({ matches }) => {
   const navigate = useNavigate();

   const Component = matches
      ? ActionIconsContainerMobile
      : ActionIconsContainerDesktop;

   return (
      <Component>
         <MyList type="row">
            <ListItemButton sx={{ justifyContent: 'center' }}>
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
               >
                  <ShoppingCartIcon />
               </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ justifyContent: 'center' }}>
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
               >
                  <FavoriteIcon />
               </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ justifyContent: 'center' }}>
               <ListItemIcon
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     color: matches && Colors.info
                  }}
                  onClick={() => {
                     navigate('/signin');
                  }}
               >
                  <LoginIcon />
               </ListItemIcon>
            </ListItemButton>
         </MyList>
      </Component>
   );
};

export default Actions;
