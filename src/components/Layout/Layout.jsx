//Components
import Header from '../header/Header';
import Footer from '../footer/Footers';
import { Outlet } from 'react-router-dom';
//Toast
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
