//MUI
import {
   IconButton,
   Box,
   TextField,
   MenuItem,
   Drawer,
   Button,
   List,
   ListItemButton,
   Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
//Components
import { AppBarContainer, AppBarHeader } from './styles';
import Actions from './Actions';
//Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppBarMobile = ({ matches }: { matches: boolean }) => {
   const [language, setLanguage] = useState('am');
   const [openMenu, setOpenMenu] = useState(false);
   const navigate = useNavigate();
   return (
      <AppBarContainer>
         <IconButton onClick={() => setOpenMenu(true)}>
            <MenuIcon />
         </IconButton>
         <AppBarHeader
            textAlign="center"
            variant="h4"
            onClick={() => {
               navigate('/');
            }}
         >
            elite shop
         </AppBarHeader>
         <Box width={'90px'}>
            <TextField
               size="small"
               select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
            >
               <MenuItem value="am">AM </MenuItem>
               <MenuItem value="ru">RU</MenuItem>
               <MenuItem value="en">EN</MenuItem>
            </TextField>
         </Box>
         <Actions matches={matches} />
         <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
            <List
               sx={{
                  width: '200px',
                  height: '100vh',
                  background: 'rgba(40, 34, 66,0.8)',
                  color: 'white'
               }}
            >
               <ListItemButton
                  onClick={() => {
                     setOpenMenu(false);
                     navigate('/');
                  }}
               >
                  <Button
                     sx={{
                        color: 'rgba(117,117,117,0.9)',
                        fontFamily: '"Montez", "Cursive"',
                        fontSize: '20px'
                     }}
                     endIcon={<HomeIcon />}
                  >
                     home
                  </Button>
               </ListItemButton>
               <Divider variant="middle" />
               <ListItemButton
                  onClick={() => {
                     setOpenMenu(false);
                     navigate('shop');
                  }}
               >
                  <Button
                     sx={{
                        color: 'rgba(117,117,117,0.9)',
                        fontFamily: '"Montez", "Cursive"',
                        fontSize: '20px'
                     }}
                     endIcon={<LocalGroceryStoreIcon />}
                  >
                     Shop
                  </Button>
               </ListItemButton>
               <Divider variant="middle" />
               <ListItemButton
                  onClick={() => {
                     setOpenMenu(false);
                     navigate('contact');
                  }}
               >
                  <Button
                     sx={{
                        color: 'rgba(117,117,117,0.9)',
                        fontFamily: '"Montez", "Cursive"',
                        fontSize: '20px'
                     }}
                     endIcon={<CallIcon />}
                  >
                     Contact
                  </Button>
               </ListItemButton>
               <Divider variant="middle" />
               <ListItemButton
                  onClick={() => {
                     setOpenMenu(false);
                     navigate('about');
                  }}
               >
                  <Button
                     sx={{
                        color: 'rgba(117,117,117,0.9)',
                        fontFamily: '"Montez", "Cursive"',
                        fontSize: '20px'
                     }}
                     endIcon={<InfoIcon />}
                  >
                     About
                  </Button>
               </ListItemButton>
               <Divider variant="middle" />
            </List>
         </Drawer>
      </AppBarContainer>
   );
};

export default AppBarMobile;
