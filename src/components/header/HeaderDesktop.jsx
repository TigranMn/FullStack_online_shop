import { NavLink } from 'react-router-dom';
import { MenuItem, TextField, Box } from '@mui/material';
import { useState } from 'react';
import { AppBarContainer, AppBarHeader, MyList } from './styles';
import { useNavigate } from 'react-router-dom';
import Actions from './Actions';
import React from 'react';

const AppBarDesktop = ({ matches }) => {
   const [language, setLanguage] = useState('am');
   const navigate = useNavigate();

   return (
      <AppBarContainer>
         <AppBarHeader
            onClick={() => {
               navigate('/');
            }}
         >
            Elite Shop
         </AppBarHeader>
         <MyList type="row">
            <NavLink to={'/'}>
               <h3 style={{ color: 'white' }}>Home</h3>
            </NavLink>
            <NavLink to={'/shop'}>{<h3 style={{ color: 'white' }}>Shop</h3>}</NavLink>
            <NavLink to={'/contact'}>
               <h3 style={{ color: 'white' }}>Contact</h3>
            </NavLink>
            <NavLink to={'/about'}>
               <h3 style={{ color: 'white' }}>About</h3>
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
