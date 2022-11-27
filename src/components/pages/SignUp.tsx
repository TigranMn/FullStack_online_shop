import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import firebase from 'firebase/app';
import { setUser } from '../../redux/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Signup() {
   const esim = useAppSelector((state) => state.user);
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   console.log(useAuth());
   console.log(esim);

   const handleAuth = (e: any) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            dispatch(
               setUser({
                  email: user?.email,
                  token: user?.refreshToken,
                  id: user?.uid
               })
            );
            navigate('/user');
         })
         .finally(() => {
            setEmail('');
            setUser('');
         });
   };

   return (
      <Container sx={{ mt: '20px' }}>
         <form onSubmit={handleAuth}>
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
            <button type="submit">Sign Up</button>

            <br />
            <br />

            <p>
               Already have an account ?{' '}
               <button
                  onClick={() => {
                     navigate('/signin');
                  }}
               >
                  Sign In
               </button>
            </p>
         </form>
      </Container>
   );
}
