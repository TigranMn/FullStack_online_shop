import React from 'react';
import { Box, Tooltip, IconButton, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function About() {
   return (
      <Container
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }}
      >
         <Box sx={{ maxWidth: '450px', textAlign: 'justify' }}>
            <Typography
               component="p"
               sx={{
                  position: 'relative',
                  margin: '20px',
                  '&:before': {
                     content: '"\u201c"',
                     position: 'absolute',
                     fontSize: '6rem',
                     top: '-70px',
                     left: '-45px'
                  }
               }}
            >
               eliteMode is an online shopping company established in 2022 which is a form of
               electronic commerce which allows consumers to directly buy goods or services from a
               seller over the Internet using a web browser or a mobile app. eliteMode enables the
               customer to browse the firm's range of products and services, view photos or images
               of the products, along with information about the product specifications, features
               and prices. Online stores usually enable shoppers to use "search" features to find
               specific models, brands or items. Online customers must have access to the Internet
               and a valid method of payment in order to complete a transaction, such as a credit
               card, an Interac-enabled debit card, or a service such as PayPal.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
               <Tooltip title="Facebook">
                  <IconButton>
                     <FacebookIcon />
                  </IconButton>
               </Tooltip>
               <Tooltip title="Instagram">
                  <IconButton>
                     <InstagramIcon />
                  </IconButton>
               </Tooltip>
               <Tooltip title="Twitter">
                  <IconButton>
                     <TwitterIcon />
                  </IconButton>
               </Tooltip>
            </Box>
         </Box>
      </Container>
   );
}
