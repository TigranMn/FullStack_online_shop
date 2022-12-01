import { AppBarContainer, AppBarHeader } from './styles';
import { IconButton, Box, TextField, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Actions from './Actions';
import { useNavigate } from 'react-router-dom';

const AppBarMobile = ({ matches }: any) => {
   const [language, setLanguage] = useState('am');

   const navigate = useNavigate();
   return (
      <AppBarContainer>
         <IconButton>
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
      </AppBarContainer>
   );
};

export default AppBarMobile;
