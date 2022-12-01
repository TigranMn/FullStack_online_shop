import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Product = styled(Box)(() => ({
   position: 'relative',
   width: '200px',
   height: '300px',
   background: '#122936',
   borderRadius: '15px',
   overflow: 'hidden',
   '&:before': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      height: '100%',
      width: '100%',
      background: '#2196f3',
      transform: 'skewY(345deg)',
      transition: '0.5s'
   },
   '&:hover:before': {
      top: '-70%',
      transform: 'skewY(390deg)'
   }
}));

export const ProductBox = styled(Box)(() => ({
   position: 'relative',
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: '20px',
   zIndex: 1
}));

export const ProductImages = styled('img')(({ src, theme }) => ({
   src: `url(${src})`,
   maxWidth: '100%',
   width: '200px',
   transition: '0.5 s'
}));

export const ProductContent = styled(Box)(() => ({
   position: 'relative',
   padding: '20px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   zIndex: 1
}));

export const ProductName = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#fff',
   fontWeight: 500,
   textTransform: 'uppercase',
   letterSpacing: '1px'
}));

export const ProductPrice = styled(Typography)(() => ({
   fontSize: '18px',
   color: '#fff',
   fontWeight: 500,
   letterSpacing: '1px'
}));
