//MUI
import { Box, Container } from '@mui/material';
import TypewriterComponent from 'typewriter-effect';
import AccordionPage from '../About/accordion/Accordion';

export default function About() {
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
                        typewriter.typeString('Definition').pauseFor(4000).deleteAll().start();
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora
                  mollitia explicabo numquam architecto? Illum quibusdam repellendus neque sequi
                  fugiat, dolorum amet odit molestiae magnam unde accusantium eligendi id, numquam
                  minus explicabo deserunt recusandae. Nobis, provident enim. Ab nam soluta nostrum
                  reiciendis labore delectus non repudiandae quo blanditiis harum nulla quod, rem
                  quis fugit aliquam exercitationem quisquam animi voluptas vero ipsa libero tempore
                  laboriosam, temporibus earum. Nisi nesciunt, tempore sed error iste voluptatibus
                  sit molestiae explicabo, aliquid veritatis voluptatem odit praesentium pariatur
                  repudiandae aspernatur eum voluptate dolor doloremque molestias ipsam temporibus
                  unde ducimus earum. Nemo, rerum! Optio corporis, maiores cupiditate quis unde
                  rerum odit consequatur nobis at quibusdam voluptatum perferendis incidunt nulla
                  ipsum accusantium delectus tempore vero, dolore, voluptatem cum. Quae animi
                  pariatur sequi quod obcaecati voluptas ipsam dignissimos! Quod in modi aliquid
                  tenetur dicta laudantium corrupti mollitia odit id voluptatem, ad sit, praesentium
                  consectetur voluptatum necessitatibus consequatur recusandae atque amet, neque
                  ratione velit. Adipisci provident natus asperiores molestiae optio nam beatae
                  maxime dolorem repellat nostrum eaque ad in vel perferendis, explicabo libero?
                  Architecto fugit exercitationem obcaecati doloribus accusamus consequuntur iusto
                  vel laboriosam, corrupti nulla ullam consequatur adipisci expedita corporis
                  deserunt repellat ab necessitatibus pariatur sequi ipsum at illo aliquid.
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
