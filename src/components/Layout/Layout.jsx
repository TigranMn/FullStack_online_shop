import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footers';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function Layout() {
   return (
      <>
         <ToastContainer newestOnTop={false} />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
