//MUI
import { Box } from '@mui/material';
//Components
import {
   TeamMemberContainer,
   TeamMemberCollector
} from '../../styles/About';
import AboutItem from '../About/AboutItem/AboutItem';
import AboutSelf from '../About/AboutSelf/AboutSelf';

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
               <h1 style={{ fontSize: '5rem', opacity: '0.3' }}>Definition</h1>
               <h6 style={{ fontSize: '1.2rem', fontWeight: 300 }}>Ourself</h6>
            </div>
            <TeamMemberContainer>
               <TeamMemberCollector>
                  <AboutItem fullName='Suren Zaqaryan' src='https://img.championat.com/s/735x490/news/big/o/h/bloger-hasbik-ufc-280_16659981331645926159.jpg' dataAos='fade-right' />
                  <AboutSelf lead='Data Lead Architect' dataAos='fade-up-left' dataAosDuration={1500} />
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>
                  <AboutSelf lead='Software Lead Architect' dataAosDuration={3000} dataAos='fade-up' />
                  <AboutItem src={'https://static.obzor.io/files/2022/09/obzor-io220930-Maxresdefault.jpg'} fullName='Tigran Mnatsakanyan' dataAosDuration={2000} dataAosEasing='ease-out-cubic' dataAos='flip-left' />
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <AboutItem dataAos='fade-up' dataAosAnchorPlacement='center-center' src='https://cdn.forbes.ru/forbes-static/1040x669/new/2022/04/445-6269016c556dc.jpg' fullName='Narek Hovakimyan' />
                  <AboutSelf dataAos='fade-up' dataAosDuration={1000} dataAosAnchorPlacement='top-center' lead='SOFTWARE TESTER' />
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>
                  <AboutSelf lead='WEB ANALYTICS DEVELOPER' dataAos='fade-right' />
                  <AboutItem src='https://i.pinimg.com/736x/a6/6f/29/a66f297794d3f99e18157a73d543d063.jpg' fullName='Shahen Sinanyan' dataAos='fade-down-left' dataAosDuration={2000} />
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <AboutItem fullName='Razmik Kocharyan' src='https://s0.rbk.ru/v6_top_pics/media/img/1/05/756629801981051.jpeg' dataAos='flip-up' />
                  <AboutSelf lead='USER ACCEPTANCE TESTER' dataAos='zoom-out' />
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>
                  <AboutSelf lead='QA Engineer' dataAos='fade-up' />
                  <AboutItem fullName='Erik Harutyunyan' src='https://www.pravilamag.ru/upload/img_cache/d46/d465615a6ee6efe551fdd4f465aa39d9_ce_1440x958x0x53_cropped_666x444.jpg' dataAos='zoom-in-up' dataAosDuration={3000} />
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <AboutItem fullName='Tigran Petrosyan' src='https://www.thesun.co.uk/wp-content/uploads/2022/08/553fc8c0-4e02-4a96-800b-a2453827fe2b.jpg' dataAos='fade-down' dataAosEasing='linear' dataAosDuration={1500} />
                  <AboutSelf lead='Design Engineer' dataAos='fade-up' dataAosDuration={3000} />
               </TeamMemberCollector>
            </TeamMemberContainer>
         </Box>
      </>
   );
}
