import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBarDesktop from './HeaderDesktop';
import AppBarMobile from './HeaderMobile';

export default function Header() {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
   return (
      <div>
         <>
            {matches ? (
               <>
                  <AppBarMobile matches={matches} />
               </>
            ) : (
               <>
                  <AppBarDesktop matches={matches} />
               </>
            )}
         </>
      </div>
   );
   // <AppBar
   //    position="sticky"
   //    sx={{ background: 'linear-gradient(to right, #16222a, #3a6073) ' }}
   // >
   //    <Toolbar>
   //       <Container>
   //          <Tabs value={selectedTabIndex} textColor="inherit">
   //             <Tab onClick={() => onClickHandle('/')} label={'Home'} />
   //             <Tab onClick={() => onClickHandle('/shop')} label={'Shop'} />
   //             <Tab
   //                onClick={() => onClickHandle('/about')}
   //                label={'About'}
   //             />
   //             <Tab
   //                onClick={() => onClickHandle('/contact')}
   //                label={'Contact'}
   //             />
   //             {useAuth().isAuth ? (
   //                <Tab
   //                   onClick={() => onClickHandle('/user')}
   //                   label={<Avatar src="/broken-image.jpg" />}
   //                />
   //             ) : (
   //                <Tab
   //                   onClick={() => onClickHandle('/signin')}
   //                   label={'Login'}
   //                />
   //             )}
   //          </Tabs>
   //       </Container>
   //    </Toolbar>
   // </AppBar>
}
