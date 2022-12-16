//MUI
import { Box, Tooltip, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialNetwork = () => {
   return (
      <Box sx={{ display: 'flex' }}>
         <Tooltip title="Facebook">
            <IconButton color="info">
               <FacebookIcon fontSize="large" />
            </IconButton>
         </Tooltip>
         <Tooltip title="Instagram">
            <IconButton color="error">
               <InstagramIcon fontSize="large" />
            </IconButton>
         </Tooltip>
         <Tooltip title="Twitter">
            <IconButton color="info">
               <TwitterIcon fontSize="large" />
            </IconButton>
         </Tooltip>
      </Box>
   );
};

export default SocialNetwork;
