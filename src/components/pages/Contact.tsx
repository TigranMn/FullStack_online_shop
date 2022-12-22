import { Button, Typography } from '@mui/material';
import { BackCover, Book, BookCover, ContactContainer, LastPage, Page } from '../../styles/Contact';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import ContactItemMail from '../../components//ContactItems/contactItemMail/ContactItemMail';
import ContactItemPhone from '../ContactItems/contactItemPhone/ContactItemPhone';
import ContactItemMap from '../ContactItems/contactItemMap/ContactItemMap';
import { useState } from 'react';

export default function Contact() {
   const [showItem, setShowItem] = useState('');

   let Component;

   if (showItem === 'ContactItemMap') {
      Component = <ContactItemMap />;
   } else if (showItem === 'ContactItemPhone') {
      Component = <ContactItemPhone />;
   } else {
      Component = <ContactItemMail />;
   }

   return (
      <ContactContainer>
         <Book>
            <BookCover className='bookCover'>
               <Typography
                  variant='h4'
                  sx={{ color: '#5082fc', fontFamily: '"Montez", "Cursive"', marginTop: '30px' }}
               >
                  The guide to contact
               </Typography>
               <img style={{position: 'absolute', width: '250px', top: '50px'}} src='https://cdn3d.iconscout.com/3d/premium/thumb/call-5590589-4652632.png' />
            </BookCover>
            <Page className='page' />
            <Page className='page' />
            <Page className='page' />
            <Page className='page' />
            <Page className='page' />
            <LastPage>
               <Button
                  onClick={() => setShowItem('')}
                  size='small'
                  sx={{ color: '#212834' }}
                  endIcon={<EmailIcon />}
               >
                  Gmail
               </Button>
               <Button
                  onClick={() => setShowItem('ContactItemPhone')}
                  size='small'
                  sx={{ color: '#212834' }}
                  endIcon={<PhoneIcon />}
               >
                  Phone
               </Button>
               <Button
                  onClick={() => setShowItem('ContactItemMap')}
                  size='small'
                  sx={{ color: '#212834' }}
                  endIcon={<MapIcon />}
               >
                  Map
               </Button>
            </LastPage>
            <BackCover></BackCover>
         </Book>
         {Component}
      </ContactContainer>
   );
}
