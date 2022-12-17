//MUI
import { Box, Grid, List, ListItemText, Typography } from '@mui/material';
//Styles
import { FooterTitle } from './styles';
//Components
import SocialNetwork from '../About/socialNetwork/SocialNetwork';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate('/faq');
   };

   return (
      <Box
         sx={{
            marginTop: 'auto',
            background: '#212834',
            color: 'white',
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' }
         }}
      >
         <Grid container spacing={2} justifyContent={'center'}>
            <Grid item md={6} lg={4}>
               <FooterTitle variant='body1'>About</FooterTitle>
               <Typography variant='caption'>
                  elite shop is an online shopping company established in 2022 which is a form of
                  electronic commerce which allows consumers to directly buy goods or services from
                  a seller over the Internet using a web browser or a mobile app.
               </Typography>
            </Grid>
            <Grid item md={6} lg={2}>
               <FooterTitle variant='body1'>Category</FooterTitle>
               <List>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        Watches
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        Jewelry
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        Accessories
                     </Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={6} lg={2}>
               <FooterTitle variant='body1'>Contact</FooterTitle>
               <List>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        (000) - 00 - 00 - 00
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        (111) - 11 - 11 - 11
                     </Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography variant='caption' lineHeight={2}>
                        (222) - 22 - 22 - 22
                     </Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={6} lg={2}>
               <h1 style={{ cursor: 'pointer' }} onClick={handleNavigate}>
                  FAQ
               </h1>
               <Box sx={{ mt: 4 }}>
                  <SocialNetwork />
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Footer;
