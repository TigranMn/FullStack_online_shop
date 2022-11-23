import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

export default function Header() {
   return (
      <AppBar position="static">
         <Toolbar>
            <Button variant="contained">
               <NavLink to={'/'}>Home</NavLink>
            </Button>
            <Button>
               <NavLink to={'/shop'}>Shop</NavLink>
            </Button>
            <Button>
               <NavLink to={'/contact'}>Contact</NavLink>
            </Button>
            <Button>
               <NavLink to={'/about'}>About</NavLink>
            </Button>
         </Toolbar>
      </AppBar>
   );
}
