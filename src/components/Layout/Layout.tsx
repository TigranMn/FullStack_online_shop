import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appbar';
import AppBarDesktop from '../appbar/appbarDesktop';
import Footer from '../footer';

export default function Layout() {
   return (
      <>
         <AppBar />
         <Outlet />
         <Footer />
      </>
   );
}
