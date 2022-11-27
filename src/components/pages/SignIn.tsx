import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import firebase from 'firebase/app';
import { setUser } from '../../redux/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export default function () {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const esim = useAppSelector((state) => state.user);

   // console.log(useAuth());
   // console.log(esim);

   const handleSignIn = (e: any) => {
      e.preventDefault();
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(
               setUser({
                  email: user?.email,
                  token: user?.refreshToken,
                  id: user?.uid
               })
            );
            navigate('/shop');
         })
         .catch(() => {
            console.log('email or password is invalid!');
         })
         .finally(() => {
            setEmail('');
            setPassword('');
         });
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