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
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const navigate = useNavigate();

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
            return user;
         })
         .then((user) => {
            localStorage.setItem(
               'currentUser',
               JSON.stringify({
                  email: user.email,
                  token: user.refreshToken,
                  id: user.uid
               })
            );
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
