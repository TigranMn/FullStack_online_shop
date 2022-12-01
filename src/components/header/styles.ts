import { styled } from '@mui/material/styles';
import { Typography, List, Box } from '@mui/material';
import { Colors } from '../../styles/Theme';
import '@fontsource/montez';

export const AppBarContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '2px 8px'
}));

export const AppBarHeader = styled(Typography)(() => ({
   padding: '4px',
   flexGrow: 1,
   fontSize: '4em',
   fontFamily: "'Montez', 'Cursive'",
   color: Colors.secondary,
   cursor: 'pointer'
}));

export const MyList = styled(List)(({ type }: any) => ({
   display: type === 'row' ? 'flex' : 'block',
   flexGrow: 3,
   justifyContent: 'center',
   alignItems: 'center'
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
   flexGrow: 0
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
   display: 'flex',
   background: Colors.secondary,
   position: 'fixed',
   bottom: 0,
   left: 0,
   width: '100%',
   alignItems: 'center',
   zIndex: 99,
   borderTop: '1px solid white'
}));
