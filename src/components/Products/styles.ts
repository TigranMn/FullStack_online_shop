import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';

export const Product = styled(Box)(() => ({
   position: 'relative',
   background: '#fff',
   borderRadius: '20px',
   margin :'20px 0',
   width :'280px',
    '&:before': {
      content: '""',
      position: 'absolute',
      height: '50%',
      width: '100%',
      background: '#7d2ae8',
      borderRadius: '20px 20px 0 0'
   }
}));

export const ProductCard = styled(Box)(()=> ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   padding :'30px',
   position: 'relative',
   zIndex: 1
}));

export const ProductBox = styled(Box)(() => ({
   height: '140px',
   width:'140px',
   borderRadius: '50%',
   padding: '3px',
   background :'#7d2ae8'
}));

export const ProductImages = styled('img')(({ src }) => ({
   src: `url(${src})`,
   width: '100%',
   height: '100%',
   objectFit: 'contain',
   borderRadius: '50%',
   border :'3px solid #fff',
   background : '#fff'
  
}));

export const ProductContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop :'10px',
    color: '#333',
    border :'3px solid #fff'
}));

export const ProductName = styled(Typography)(() => ({
   fontSize: '20px',
   fontWeight: 600,
}));

export const ProductPrice = styled(Typography)(() => ({
   fontSize: '15px',
   fontWeight: 500,
}));

export const ProductActionButton = styled(IconButton)(() => ({
   display: 'flex',
   justifyContent :'center',
   width :'100%',
   marginTop :'20px',
   background : '#7d2ae8',
   outline :'none',
   border :'none',
   color :'#fff',
   padding :'8px 22px',
   borderRadius : '20px',
   fontSize : '14px',
   transition :'all 0.3s ease',
   '&:hover ' : {
      background : '#6616d0'
   }
}));


export const ProductLikedIcon = styled(Box)(()=> ({
   position :'absolute',
   top: '50px',
   right :'50px'
}));
