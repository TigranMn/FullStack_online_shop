//Hooks
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../store';
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';
// import { tabPanelProps } from '../../utils/tabPanelProps';
import { SpeedDial, SpeedDialAction } from '@mui/material';
//Actions
import { removeUser } from '../../redux/userSlice';
//Mui
// import TabPanel from '../TabPanel/TabPanel';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useTranslation } from 'react-i18next';
//Components
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Security from '../Security/Security';

export default function User() {
   //    const [value, setValue] = useState(0);
   const [userInfo, setUserInfo] = useState('personalInfo');
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { t } = useTranslation();
   const logged = useAuth();

   const handleUser = (info) => {
      if (info === 'personalInfo') {
         setUserInfo('personalInfo');
      } else {
         setUserInfo('privacy');
      }
   };

   //    const handleChange = (event, newValue) => {
   //       setValue(newValue);
   //    };

   const handleLogOut = () => {
      navigate('/login');
      dispatch(removeUser());
      localStorage.removeItem('currentUser');
   };

   return !logged.isAuth ? (
      <Navigate to={'/login'} />
   ) : (
      <div style={{ background: '#1A202C' }}>
         <div
            className='headerInfo'
            style={{
               textTransform: 'uppercase',
               lineHeight: 0,
               textAlign: 'center',
               marginTop: '6rem',
               color: '#fff'
            }}
         >
            <h1 style={{ fontSize: '6rem', opacity: '0.3' }}>Profile</h1>
            <h6 style={{ fontSize: '1.5rem', fontWeight: 300 }}>User</h6>
         </div>
         <div className='profileContainer'>
            <div className='profileBox'>
               <LogoutIcon
                  onClick={handleLogOut}
                  sx={{
                     position: 'absolute',
                     top: '20px',
                     right: '25px',
                     cursor: 'pointer',
                     color: '#fff'
                  }}
               />
               <SpeedDial
                  ariaLabel='Navigation'
                  sx={{
                     position: 'absolute',
                     bottom: '15px',
                     right: '15px',
                     cursor: 'pointer'
                  }}
                  icon={<SettingsIcon />}
               >
                  <SpeedDialAction
                     icon={<PersonIcon onClick={() => handleUser('personalInfo')} />}
                     tooltipTitle='Profile'
                     tooltipOpen
                  />
                  <SpeedDialAction
                     icon={<VerifiedUserIcon onClick={() => handleUser('privacy')} />}
                     tooltipTitle='Privacy'
                     tooltipOpen
                  />
               </SpeedDial>
               {userInfo === 'personalInfo' ? <PersonalInfo /> : <Security />}
            </div>
            {/* <div className='profileBox'>
               <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                  <Tab sx={{ color: '#8749fd' }} label='Personal Info' {...tabPanelProps(0)} />
                  <Tab sx={{ color: '#8749fd' }} label='Security' {...tabPanelProps(1)} />
                  <Tab sx={{ color: '#8749fd' }} label='Idram' {...tabPanelProps(2)} />
                  <Tab sx={{ color: '#8749fd' }} label='Demo Buy' {...tabPanelProps(3)} />
               </Tabs>
               <TabPanel value={value} index={0}>
                  <PersonalInfo />
               </TabPanel>
               <TabPanel value={value} index={1}>
                  <Security />
               </TabPanel>
               <LogoutIcon
                  onClick={handleLogOut}
                  sx={{ position: 'absolute', top: '20px', right: '25px', cursor: 'pointer' }}
               />
            </div> */}
         </div>
      </div>
   );
}
