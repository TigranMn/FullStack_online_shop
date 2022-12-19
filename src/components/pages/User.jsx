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

export default function User() {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const logged = useAuth();

   const handleLogOut = () => {
      navigate('/login');
      dispatch(removeUser());
      localStorage.removeItem('currentUser');
   };

   return !logged.isAuth ? (
      <Navigate to={'/login'} />
   ) : (
      <div
         style={{
            width: '100%',
            height: '100vh',
            background: '#1A202C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <div
            style={{
               background: '#fff',
               padding: '50px',
               width: '800px',
               borderRadius: '10px',
               position: 'relative'
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
               <p style={{ marginTop: '30px' }}>
                  Glad to see you dear <span style={{ color: '#5082FC' }}>{logged.name}</span>, here
                  is some information about you. Here you can shop from stores in every corner of
                  the world. You can find glasses, necklaces and watches. In case of any question,
                  you can contact us and our operators will contact you immediately. Well let's
                  start our shopping.
               </p>
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
                  Log out
               </Button>
            </div>
         </div>
      </div>
   );
}
