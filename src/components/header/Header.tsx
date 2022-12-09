import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBarDesktop from './HeaderDesktop';
import AppBarMobile from './HeaderMobile';

export default function Header() {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   return (
      <div>
         {matches ? (
            <>
               <AppBarMobile matches={matches} />
            </>
         ) : (
            <>
               <AppBarDesktop matches={matches} />
            </>
         )}
      </div>
   );
}
