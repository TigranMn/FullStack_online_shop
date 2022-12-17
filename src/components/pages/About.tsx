//MUI
import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Container, Box } from '@mui/material';
//Components
import {
   TeamMemberContainer,
   TeamMember,
   TeamMemberImageBox,
   TeamMemberInfo,
   TeamMemberImage,
   TeamMemberDetails,
   AboutMySelf,
   AboutMySelfHeading,
   TeamMemberCollector
} from '../../styles/About';
import AboutItem from '../About/AboutItem/AboutItem';
import AboutSelf from '../About/AboutSelf/AboutSelf';

export default function About() {
   return (
      <>
         <Box style={{ background: '#1A202C' }}>
            <TeamMemberContainer>
               <TeamMemberCollector>
                  <AboutItem fullName={'Suren Zaqaryan'} name={'suren'} />
                  <AboutSelf lead={'Data Lead Architect'} />
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>
                  <AboutSelf lead={'Software Lead Architect'} />
                  <AboutItem fullName={'Tigran Mnatsakanyan'} name={'tigranM'} />
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <AboutItem fullName={'Narek Hovakimyan'} name={'narek'} />
                  <AboutSelf lead={'SOFTWARE TESTER'} />
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>


                  <AboutSelf dataAos={'fade-right'} lead={' WEB ANALYTICS DEVELOPER'} />
                  <TeamMember data-aos="fade-down-left" data-aos-duration="2000">
                     <TeamMemberImageBox className="TeamMemberImageBox">
                        <TeamMemberImage src="/images/teamMember/shahen.PNG" alt="teamMember" />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className="TeamMemberInfo">
                        <TeamMemberDetails>
                           <Typography
                              variant="h6"
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Shahen Sinanyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component="span"
                           >

                           </Typography>
                           <List sx={{ position: 'relative', display: 'flex', marginTop: '5px' }}>
                              <ListItem>
                                 <ListItemIcon>
                                    <LinkedInIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <GitHubIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <TelegramIcon />
                                 </ListItemIcon>
                              </ListItem>
                           </List>
                        </TeamMemberDetails>
                     </TeamMemberInfo>
                  </TeamMember>
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <TeamMember data-aos="flip-up">
                     <TeamMemberImageBox className="TeamMemberImageBox">
                        <TeamMemberImage src="/images/teamMember/razmik.PNG" alt="teamMember" />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className="TeamMemberInfo">
                        <TeamMemberDetails>
                           <Typography
                              variant="h6"
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Razmik Kocharyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component="span"
                           >
                              Junior software engineer
                           </Typography>
                           <List sx={{ position: 'relative', display: 'flex', marginTop: '5px' }}>
                              <ListItem>
                                 <ListItemIcon>
                                    <LinkedInIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <GitHubIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <TelegramIcon />
                                 </ListItemIcon>
                              </ListItem>
                           </List>
                        </TeamMemberDetails>
                     </TeamMemberInfo>
                  </TeamMember>
                  <AboutMySelf data-aos="zoom-out">
                     <AboutMySelfHeading>
                        <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                           USER ACCEPTANCE TESTER
                        </Typography>
                     </AboutMySelfHeading>
                     <Typography component={'p'}>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing
                     </Typography>
                  </AboutMySelf>
               </TeamMemberCollector>
               <TeamMemberCollector sx={{ background: '#2B3548', color: '#DCCDFF' }}>
                  <AboutMySelf data-aos="fade-up">
                     <AboutMySelfHeading>
                        <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                           QA Engineer
                        </Typography>
                     </AboutMySelfHeading>
                     <Typography component={'p'}>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing
                     </Typography>
                  </AboutMySelf>
                  <TeamMember data-aos="zoom-in-up" data-aos-duration="3000">
                     <TeamMemberImageBox className="TeamMemberImageBox">
                        <TeamMemberImage src="/images/teamMember/erik.PNG" alt="teamMember" />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className="TeamMemberInfo">
                        <TeamMemberDetails>
                           <Typography
                              variant="h6"
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Erik Harutyunyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component="span"
                           >
                              Junior software engineer
                           </Typography>
                           <List sx={{ position: 'relative', display: 'flex', marginTop: '5px' }}>
                              <ListItem>
                                 <ListItemIcon>
                                    <LinkedInIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <GitHubIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <TelegramIcon />
                                 </ListItemIcon>
                              </ListItem>
                           </List>
                        </TeamMemberDetails>
                     </TeamMemberInfo>
                  </TeamMember>
               </TeamMemberCollector>
               <TeamMemberCollector>
                  <TeamMember
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                  >
                     <TeamMemberImageBox className="TeamMemberImageBox">
                        <TeamMemberImage src="/images/teamMember/tigran.PNG" alt="teamMember" />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className="TeamMemberInfo">
                        <TeamMemberDetails>
                           <Typography
                              variant="h6"
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Tigran Petrosyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component="span"
                           >
                              Junior software engineer
                           </Typography>
                           <List sx={{ position: 'relative', display: 'flex', marginTop: '5px' }}>
                              <ListItem>
                                 <ListItemIcon>
                                    <LinkedInIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <GitHubIcon />
                                 </ListItemIcon>
                              </ListItem>
                              <ListItem>
                                 <ListItemIcon>
                                    <TelegramIcon />
                                 </ListItemIcon>
                              </ListItem>
                           </List>
                        </TeamMemberDetails>
                     </TeamMemberInfo>
                  </TeamMember>
                  <AboutMySelf data-aos="fade-up" data-aos-duration="3000">
                     <AboutMySelfHeading>
                        <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                           Design Engineer
                        </Typography>
                     </AboutMySelfHeading>
                     <Typography component={'p'}>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing
                     </Typography>
                  </AboutMySelf>
               </TeamMemberCollector>
            </TeamMemberContainer>
         </Box>
      </>
   );
}
