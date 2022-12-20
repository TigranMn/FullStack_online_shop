import React from 'react';
import { Typography, List, ListItem, ListItemIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
//Components
import {
    TeamMember,
    TeamMemberImageBox,
    TeamMemberInfo,
    TeamMemberImage,
    TeamMemberDetails,
} from '../../../styles/About';

type AboutItem = {
    src: string;
    dataAos: string;
    fullName: string;
    dataAosEasing?: string;
    dataAosDuration?: number;
    dataAosAnchorPlacement?: string;
}

const AboutItem = ({ fullName, src, dataAos, dataAosEasing, dataAosDuration, dataAosAnchorPlacement }: AboutItem) => {
    return (
        <TeamMember data-aos={dataAos} data-aos-easing={dataAosEasing} data-aos-duration={dataAosDuration} data-aos-anchor-placement={dataAosAnchorPlacement} >
            <TeamMemberImageBox className='TeamMemberImageBox'>
                <TeamMemberImage src={src} alt='teamMember' />
            </TeamMemberImageBox>
            <TeamMemberInfo className='TeamMemberInfo'>
                <TeamMemberDetails>
                    <Typography
                        variant='h6'
                        sx={{ color: '#fff', fontSize: '1.5em', fontWeight: 500 }}
                    >
                        {fullName}
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
    );
};


export default AboutItem;