import React from 'react';
import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box } from '@mui/material';
//Components
import {
  TeamMember,
  TeamMemberImageBox,
  TeamMemberInfo,
  TeamMemberImage,
  TeamMemberDetails,
  TeamMemberCollector
} from '../../../styles/About';

type AboutItem =  {
  fullName : string;
  name : string;
}

const AboutItem = ({ fullName, name } : AboutItem)   => {
  return (
    <Box>
      <TeamMemberCollector>
        <TeamMember data-aos="fade-right">
          <TeamMemberImageBox className="TeamMemberImageBox">
            <TeamMemberImage src={`/images/teamMember/${name}.PNG`} alt="teamMember" />
          </TeamMemberImageBox>
          <TeamMemberInfo className="TeamMemberInfo">
            <TeamMemberDetails>
              <Typography
                variant="h6"
                sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
              >
                {fullName}
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
    </Box>
  );
};


export default AboutItem;