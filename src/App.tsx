import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
//Components
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/Products/ProductsList';
import Layout from './components/Layout/Layout';
import User from './components/pages/User';
import Product from './components/pages/Product';
import Login from './components/pages/Login';
import Buy from './components/pages/Buy';
import Likes from './components/pages/Likes';
import Faq from './components/pages/Faq';

import './styles/toast.css';
import { setUser } from './redux/userSlice';
import { getUser } from './api/api';

function App() {
   const isLogged = useAppSelector((state) => state.user.isLogged);
   const id = useAppSelector((state) => state.user.id) as string;
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (isLogged) {
         getUser(id).then((res) => {
            dispatch(setUser(res.snaps.docs[0].data()));
         });
      }
   }, []);

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/shop' element={<Shop />} />
               <Route path='/user' element={<User />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/shop/:category' element={<Products />} />
               <Route path='/shop/:category/:productId' element={<Product />} />
               <Route path='/buy' element={<Buy />} />
               <Route path='/login' element={<Login />} />
               <Route path='/liked' element={<Likes />} />
               <Route path='/faq' element={<Faq />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
