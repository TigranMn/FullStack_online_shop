//MUI
import { Typography, List, ListItem, ListItemIcon, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
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
                  <TeamMember data-aos='fade-right'>
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://img.championat.com/s/735x490/news/big/o/h/bloger-hasbik-ufc-280_16659981331645926159.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Suren Zaqaryan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <AboutMySelf data-aos='fade-up-left' data-aos-duration='1500'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
                           Data Lead Architect
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
                  <AboutMySelf data-aos='fade-up' data-aos-duration='3000'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
                           Software Lead Architect
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
                  <TeamMember
                     data-aos='flip-left'
                     data-aos-easing='ease-out-cubic'
                     data-aos-duration='2000'
                  >
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://static.obzor.io/files/2022/09/obzor-io220930-Maxresdefault.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Tigran Mnatsakanyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <TeamMember data-aos='fade-up' data-aos-anchor-placement='center-center'>
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://cdn.forbes.ru/forbes-static/1040x669/new/2022/04/445-6269016c556dc.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Narek Hovakimyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <AboutMySelf
                     data-aos='fade-up'
                     data-aos-anchor-placement='top-center'
                     data-aos-duration='1000'
                  >
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
                           SOFTWARE TESTER
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
                  <AboutMySelf data-aos='fade-right'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
                           WEB ANALYTICS DEVELOPER
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
                  <TeamMember data-aos='fade-down-left' data-aos-duration='2000'>
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://i.pinimg.com/736x/a6/6f/29/a66f297794d3f99e18157a73d543d063.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Shahen Sinanyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <TeamMember data-aos='flip-up'>
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://s0.rbk.ru/v6_top_pics/media/img/1/05/756629801981051.jpeg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Razmik Kocharyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <AboutMySelf data-aos='zoom-out'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
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
                  <AboutMySelf data-aos='fade-up'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
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
                  <TeamMember data-aos='zoom-in-up' data-aos-duration='3000'>
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://www.pravilamag.ru/upload/img_cache/d46/d465615a6ee6efe551fdd4f465aa39d9_ce_1440x958x0x53_cropped_666x444.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Erik Harutyunyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                     data-aos='fade-down'
                     data-aos-easing='linear'
                     data-aos-duration='1500'
                  >
                     <TeamMemberImageBox className='TeamMemberImageBox'>
                        <TeamMemberImage
                           src='https://www.thesun.co.uk/wp-content/uploads/2022/08/553fc8c0-4e02-4a96-800b-a2453827fe2b.jpg'
                           alt='teamMember'
                        />
                     </TeamMemberImageBox>
                     <TeamMemberInfo className='TeamMemberInfo'>
                        <TeamMemberDetails>
                           <Typography
                              variant='h6'
                              sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                           >
                              Tigran Petrosyan
                           </Typography>
                           <Typography
                              sx={{ color: '#2196f3', fontSize: '0.8em', fontWeight: 400 }}
                              component='span'
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
                  <AboutMySelf data-aos='fade-up' data-aos-duration='3000'>
                     <AboutMySelfHeading>
                        <Typography variant='h1' sx={{ fontSize: '2.5rem' }}>
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
