import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, Toolbar, Container, Avatar } from '@mui/material';

export default function Header() {
   const navigate = useNavigate();

   const onClickHandle = (path: string) => {
      navigate(path);
      if (path === '/') {
         setSelectedTabIndex(0);
      } else if (path === '/shop') {
         setSelectedTabIndex(1);
      } else if (path === '/about') {
         setSelectedTabIndex(2);
      } else if (path === '/contact') {
         setSelectedTabIndex(3);
      } else if (path === '/signup') {
         setSelectedTabIndex(4);
      } else if (path === '/signin') {
         setSelectedTabIndex(5);
      }
   };

   const [selectedTabIndex, setSelectedTabIndex] = useState(0);

   return (
      <AppBar
         position="sticky"
         sx={{ background: 'linear-gradient(to right, #16222a, #3a6073) ' }}
      >
         <Toolbar>
            <Container>
               <Tabs value={selectedTabIndex} textColor="inherit">
                  <Tab onClick={() => onClickHandle('/')} label={'Home'} />
                  <Tab onClick={() => onClickHandle('/shop')} label={'Shop'} />
                  <Tab
                     onClick={() => onClickHandle('/about')}
                     label={'About'}
                  />
                  <Tab
                     onClick={() => onClickHandle('/contact')}
                     label={'Contact'}
                  />
                  <Tab
                     onClick={() => onClickHandle('/signup')}
                     label={'Sign up'}
                  />
                  <Tab
                     onClick={() => onClickHandle('/signin')}
                     label={'Sign in'}
                  />
               </Tabs>
            </Container>
            <Avatar src="/broken-image.jpg" />
         </Toolbar>
      </AppBar>
   );
}
