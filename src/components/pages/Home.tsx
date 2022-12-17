//MUI
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/Theme';
//Components
import Slider from '../Slider/Slider';

import { AboutImages, AboutContainer, AboutSlider, AboutImagesContainer } from '../../styles/About';

export default function Home() {
   return (
      <>
         <AboutContainer>
            <AboutSlider>
               <AboutImagesContainer sx={{ '--i': '1;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '2;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '3;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '4;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '5;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '6;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '7;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '8;' }}>
                  <AboutImages
                     src='https://cdn.shopify.com/s/files/1/0074/5432/6835/products/CCCP-CP-7077-66-R_1800x1800.jpg?v=1638468991'
                     alt='member'
                  />
               </AboutImagesContainer>
            </AboutSlider>
         </AboutContainer>
         <ThemeProvider theme={theme}>
            <Container
               maxWidth='xl'
               sx={{
                  minHeight: '100vh',
                  background: 'linear-gradient(to right, #bdc3c7, #2c3e50)'
               }}
            >
               <Slider />
            </Container>
         </ThemeProvider>
      </>
   );
}
