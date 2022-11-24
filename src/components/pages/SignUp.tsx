import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../store';
import firebase from 'firebase/app';
import { setUser } from '../../redux/userSlice';

export default function Signup() {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleAuth = (e: any) => {
      e.preventDefault();
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(
               setUser({
                  email: user?.email,
                  id: user?.uid,
                  token: user?.refreshToken
               })
            );
         });
      setEmail('');
      setPassword('');
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
         </form>
      </Container>
   );
}
