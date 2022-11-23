import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Products from './components/Products/ProductsList';
import Login from './components/pages/Login';
// import SingleProductPage from './components/pages/SingleProductPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}>
               <Route path="/about" element={<About />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/shop/:category" element={<Products />} />
               {/* <Route path="/shop/:category/:productId" element={<SingleProductPage />} /> */}
            </Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
