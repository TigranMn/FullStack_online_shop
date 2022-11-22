import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
   return (
      <div className="wrapper">
         <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'/shop'}>Shop</NavLink>
         <NavLink to={'/contact'}>Contact</NavLink>
         <NavLink to={'/about'}>About</NavLink>
         <NavLink to={'/login'}>Login</NavLink>
         <div>
            <Outlet />
         </div>
      </div>
   );
}
