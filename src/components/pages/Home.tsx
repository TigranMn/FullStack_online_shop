import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Header from '../header/Header';

export default function Home() {
   return (
      <div className="wrapper">
         <Header />
         <div>
            <Outlet />
         </div>
      </div>
   );
}
