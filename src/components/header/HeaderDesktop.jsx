//MUI
import { MenuItem, TextField, Box } from '@mui/material';
//Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Components
import { AppBarContainer, AppBarHeader, MyList } from './styles';
import { NavLink } from 'react-router-dom';
import Actions from './Actions';

const AppBarDesktop = ({ matches }) => {
   const [language, setLanguage] = useState('am');
   const navigate = useNavigate();

   return (
      <AppBarContainer>
         <AppBarHeader
            sx={{
               color: '#5082FC',
               height: '50px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               fontSize: '38px'
            }}
            onClick={() => {
               navigate('/');
            }}
         >
            Elite Shop
         </AppBarHeader>
         <MyList type="row">
            <NavLink to={'/'}>
               <h4 style={{ color: 'white' }}>Home</h4>
            </NavLink>
            <NavLink to={'/shop'}>{<h3 style={{ color: 'white' }}>Shop</h3>}</NavLink>
            <NavLink to={'/contact'}>
               <h4 style={{ color: 'white' }}>Contact</h4>
            </NavLink>
            <NavLink to={'/about'}>
               <h4 style={{ color: 'white' }}>About</h4>
            </NavLink>
         </MyList>
         <Box width={'90px'} sx={{ outline: 'none' }}>
            <TextField
               size="small"
               sx={{
                  border: '1px solid white',
                  borderRadius: '5px',
                  background: 'white'
               }}
               select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
            >
               <MenuItem value="am">AM</MenuItem>
               <MenuItem value="ru">RU</MenuItem>
               <MenuItem value="en">EN</MenuItem>
            </TextField>
         </Box>
         <Actions matches={matches} />
      </AppBarContainer>
   );
};

export default AppBarDesktop;
