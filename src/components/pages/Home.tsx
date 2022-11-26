import React from 'react';
import {  Outlet } from 'react-router-dom';
import {  ThemeProvider } from '@mui/material/styles';
import {Container} from "@mui/material"
import theme from "../../styles/theme"
import AppBar from '../appbar';
import Slider from '../slider';
import Footer from '../footer';


export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth="xl"
      // sx={{background: "rgba(10,25,41,0.4)"}}
    >
      <AppBar />
      <Slider />
      <Footer />
      <Outlet />
      </Container>
    </ThemeProvider>
  );
}
