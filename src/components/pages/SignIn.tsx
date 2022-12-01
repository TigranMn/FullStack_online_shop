import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { signIn } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const userState = useAppSelector((state) => state.user);
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   useEffect(() => {
      if (userState.isLogged) {
         localStorage.setItem('currentUser', JSON.stringify(userState));
         navigate('/shop');
      }
   }, [userState.isLogged]);

   const handleSignIn = async (e: React.SyntheticEvent): Promise<void> => {
      e.preventDefault();
      const user = await dispatch(
         signIn({ email, password } as { email: string; password: string })
      );
   };

   return (
      <Container sx={{ mt: '20px' }}>
         <form onSubmit={handleSignIn}>
            <input
               placeholder="Email"
               type="email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
            />
            <br />
            <br />
            <input
               placeholder="password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
            />

            <br />
            <br />
            <button type="submit">Sign In</button>

            <br />
            <br />
            <p>
               Don't have an account ?{' '}
               <button
                  onClick={() => {
                     navigate('/signup');
                  }}
               >
                  Create an account!
               </button>
            </p>
         </form>
      </Container>
   );
}
