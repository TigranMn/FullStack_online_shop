import { Container } from '@mui/material';
import React from 'react';
import AccordionPage from '../About/accordion/Accordion';

function Faq() {
   return (
      <div>
         <Container
            sx={{
               maxWidth: '1440px',
               margin: '0, auto',
               marginTop: '30px',
               marginBottom: '30px'
            }}
         >
            <AccordionPage />
         </Container>
      </div>
   );
}

export default Faq;
