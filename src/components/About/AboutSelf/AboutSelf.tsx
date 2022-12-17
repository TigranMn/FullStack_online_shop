
import { Typography } from '@mui/material';

import { AboutMySelf, AboutMySelfHeading } from '../../../styles/About';
type AboutSelf = {
    lead: string
    dataAos?: string
    dataAosDuration ?: string
}

const AboutSelf = ({ lead, dataAos }: AboutSelf) => {
    return (
        <AboutMySelf data-aos={dataAos} data-aos-duration="1500">
            <AboutMySelfHeading>
                <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                    {lead}
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
    );
};

export default AboutSelf;