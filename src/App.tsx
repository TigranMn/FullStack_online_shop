import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/user" element={<User />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/shop/:category" element={<Products />} />
               <Route path="/shop/:category/:productId" element={<Product />} />
               <Route path="/buy" element={<Buy />} />
               <Route path="/login" element={<Login />} />
               <Route path="/liked" element={<Likes />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
