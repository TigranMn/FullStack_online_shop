import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/Theme';
import Slider from '../Slider/Slider';

export default function Home() {
   return (
      <ThemeProvider theme={theme}>
         <Container maxWidth="xl">
            <Slider />
         </Container>
      </ThemeProvider>
   );
}
