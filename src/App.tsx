import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/Products/ProductsList';
import SingleProductPage from './components/pages/SingleProductPage';
import Layout from './components/Layout/Layout';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/'
               element={<Layout />}>
               <Route
                  path='/'
                  element={<Home />}
               />
               <Route
                  path='/about'
                  element={<About />}
               />
               <Route
                  path='/shop'
                  element={<Shop />}
               />
               <Route
                  path='/contact'
                  element={<Contact />}
               />
               <Route
                  path='/shop/:category'
                  element={<Products />}
               />
               <Route
                  path='/shop/:category/:productId'
                  element={<SingleProductPage />}
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
