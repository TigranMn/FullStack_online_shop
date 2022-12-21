//MUI
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TypewriterComponent from 'typewriter-effect';
import AccordionPage from '../About/accordion/Accordion';

export default function About() {
   const { t } = useTranslation();

   return (
      <>
         <Box style={{ background: '#1A202C' }}>
            <div
               style={{
                  textTransform: 'uppercase',
                  lineHeight: 0,
                  textAlign: 'center',
                  marginTop: '6rem',
                  color: '#fff'
               }}
            >
               <h1 style={{ fontSize: '5rem', opacity: '0.6', color: '#5082FC' }}>
                  <TypewriterComponent
                     options={{
                        autoStart: true,
                        loop: true
                     }}
                     onInit={(typewriter) => {
                        typewriter.typeString('Definition').pauseFor(10000).deleteAll().start();
                     }}
                  />
               </h1>
            </div>
            <Container>
               <div
                  style={{
                     marginTop: '100px',
                     color: 'white',
                     fontSize: '20px',
                     letterSpacing: '1px'
                  }}
               >
                  {t('textAbout')}
                  <br />
                  <br />
                  {t('textAbout')}
                  <br />
                  <br />
                  {t('textAbout')}
                  <br />
                  <br />
               </div>
               <div
                  style={{
                     textTransform: 'uppercase',
                     lineHeight: 0,
                     textAlign: 'center',
                     marginTop: '6rem',
                     color: '#fff'
                  }}
               >
                  <h1 style={{ fontSize: '5rem', opacity: '0.6', color: '#5082FC' }}>
                     <TypewriterComponent
                        options={{
                           autoStart: true,
                           loop: true
                        }}
                        onInit={(typewriter) => {
                           typewriter.typeString('FAQ').pauseFor(4000).deleteAll().start();
                        }}
                     />
                  </h1>
               </div>
               <AccordionPage />
            </Container>
         </Box>
      </>
   );
}
