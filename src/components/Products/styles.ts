import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';

export const Product = styled(Box)(() => ({
   position: 'relative',
   background: '#fff',
   border: '1px solid white',
   borderRadius: '20px',
   margin: '20px 0',
   width: '280px',
   overflow: 'hidden',
   '&:before': {
      content: '""',
      position: 'absolute',
      height: '50%',
      width: '100%',
      background: '#8B85E9'
   }
}));

export const ProductCard = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding: '30px',
   position: 'relative',
   zIndex: 1
}));

export const ProductBox = styled(Box)(() => ({
   height: '190px',
   width: '190px',
   borderRadius: '50%',
   cursor: 'pointer',
   padding: '3px',
   background: 'inherit'
}));

export const ProductImages = styled('img')(({ src }) => ({
   src: `url(${src})`,
   width: '100%',
   height: '100%',
   objectFit: 'contain',
   borderRadius: '50%',
   border: '3px solid #fff',
   background: '#fff'
}));

export const ProductContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '10px',
   color: '#333',
   border: '3px solid #fff'
}));

export const ProductName = styled(Typography)(() => ({
   fontSize: '20px',
   fontWeight: 600
}));

export const ProductPrice = styled(Typography)(() => ({
   fontSize: '15px',
   fontWeight: 500
}));

export const ProductActionButton = styled(IconButton)(() => ({
   display: 'flex',
   justifyContent: 'center',
   margin: '20px 10px 0px',
   background: '#8B85E9',
   outline: 'none',
   border: 'none',
   color: '#fff',
   padding: '10px 22px',
   borderRadius: '20px',
   fontSize: '16px',
   transition: 'all 0.3s ease',
   '&:hover ': {
      background: 'rgba(139,133,233,0.8)',
   }
}));

export const ProductLikedIcon = styled(Box)(() => ({
   position: 'absolute',
   top: '50px',
   right: '50px'
}));
