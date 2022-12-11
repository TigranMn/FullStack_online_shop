import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import { useEffect } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

import {
   AboutImages,
   AboutContainer,
   AboutSlider,
   AboutImagesContainer,
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
         <AboutContainer>
            <AboutSlider>
               <AboutImagesContainer sx={{ '--i': '1;' }}>
                  <AboutImages src="/images/teamMember/suren.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '2;' }}>
                  <AboutImages src="/images/teamMember/shahen.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '3;' }}>
                  <AboutImages src="/images/teamMember/narek.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '4;' }}>
                  <AboutImages src="/images/teamMember/erik.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '5;' }}>
                  <AboutImages src="/images/teamMember/tigranM.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '6;' }}>
                  <AboutImages src="/images/teamMember/razmik.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '7;' }}>
                  <AboutImages src="/images/teamMember/tigran.PNG" alt="member" />
               </AboutImagesContainer>
               <AboutImagesContainer sx={{ '--i': '8;' }}>
                  <AboutImages src="/images/teamMember/cover.jpg" alt="member" />
               </AboutImagesContainer>
            </AboutSlider>
         </AboutContainer>
         <TeamMemberContainer>
            <TeamMemberCollector>
               <TeamMember data-aos="fade-right">
                  <TeamMemberImageBox className="TeamMemberImageBox">
                     <TeamMemberImage src="/images/teamMember/suren.PNG" alt="teamMember" />
                  </TeamMemberImageBox>
                  <TeamMemberInfo className="TeamMemberInfo">
                     <TeamMemberDetails>
                        <Typography
                           variant="h6"
                           sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                        >
                           Suren Zaqaryan
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
               <AboutMySelf data-aos="fade-up-left" data-aos-duration="1500">
                  <AboutMySelfHeading>
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
            </TeamMemberCollector>
            <TeamMemberCollector>
               <AboutMySelf data-aos="fade-up" data-aos-duration="3000">
                  <AboutMySelfHeading>
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
               <TeamMember
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
               >
                  <TeamMemberImageBox className="TeamMemberImageBox">
                     <TeamMemberImage src="/images/teamMember/tigranM.PNG" alt="teamMember" />
                  </TeamMemberImageBox>
                  <TeamMemberInfo className="TeamMemberInfo">
                     <TeamMemberDetails>
                        <Typography
                           variant="h6"
                           sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                        >
                           Tigran Mnatsakanyan
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
               <TeamMember data-aos="fade-up" data-aos-anchor-placement="center-center">
                  <TeamMemberImageBox className="TeamMemberImageBox">
                     <TeamMemberImage src="/images/teamMember/narek.PNG" alt="teamMember" />
                  </TeamMemberImageBox>
                  <TeamMemberInfo className="TeamMemberInfo">
                     <TeamMemberDetails>
                        <Typography
                           variant="h6"
                           sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                        >
                           Narek Hovakimyan
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
               <AboutMySelf
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-duration="1000"
               >
                  <AboutMySelfHeading>
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
            </TeamMemberCollector>
            <TeamMemberCollector>
               <AboutMySelf data-aos="fade-right">
                  <AboutMySelfHeading>
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
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
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
            </TeamMemberCollector>
            <TeamMemberCollector>
               <AboutMySelf data-aos="fade-up">
                  <AboutMySelfHeading>
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
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
               <TeamMember data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
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
                     <Typography variant="h1" sx={{ fontSize: '10rem' }}>
                        About
                     </Typography>
                  </AboutMySelfHeading>
                  <Typography component={'p'}>
                     It is a long established fact that a reader will be distracted by the readable
                     content of a page when looking at its layout. The point of using Lorem Ipsum is
                     that it has a more-or-less normal distribution of letters, as opposed to using
                     'Content here, content here', making it look like readable English. Many
                     desktop publishing
                  </Typography>
               </AboutMySelf>
            </TeamMemberCollector>
         </TeamMemberContainer>
      </>
   );
}
