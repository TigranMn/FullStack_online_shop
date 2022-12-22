//Hooks
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../store';
import { useNavigate, Navigate } from 'react-router-dom';
//Actions
import { removeUser } from '../../redux/userSlice';
//Mui
import { Button } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
//Components
import UserProfileStyle from '../../styles/UserProfileStyle';

export default function User() {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { t } = useTranslation();
   const logged = useAuth();

   const handleLogOut = () => {
      navigate('/login');
      dispatch(removeUser());
      localStorage.removeItem('currentUser');
   };

   return !logged.isAuth ? (
      <Navigate to={'/login'} />
   ) : (
      <div className='profileContainer'>
         <UserProfileStyle />
         <div
            style={{
               background: '#fff',
               padding: '50px',
               width: '800px',
               borderRadius: '10px',
               position: 'absolute',
               top: '23%',
               left: '23%'
            }}
         >
            <div
               style={{
                  marginLeft: '50px',
                  width: '80%',
                  fontWeight: 500,
                  textAlign: 'justify'
               }}
            >
               <h1 style={{ fontSize: '26px', marginBottom: '10px' }}>
                  {logged.name} {logged.lastName}
               </h1>
               <p style={{ marginTop: '30px' }}>{t('profileText')}</p>
               <div
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     margin: '100px 0 30px'
                  }}
               >
                  <Button sx={{ color: '#383535' }} size='small' startIcon={<AlternateEmailIcon />}>
                     {logged.email}
                  </Button>
                  <Button sx={{ color: '#383535' }} size='small' startIcon={<Grid3x3Icon />}>
                     {logged.id}
                  </Button>
                  <Button sx={{ color: '#383535' }} size='small' startIcon={<VerifiedUserIcon />}>
                     {logged.status}
                  </Button>
               </div>
               <Button
                  sx={{ color: '#383535', position: 'absolute', top: '40px', right: '25px' }}
                  endIcon={<LogoutIcon />}
                  onClick={handleLogOut}
               >
                  {t('logout')}
               </Button>
            </div>
         </div>
      </div>
   );
}
