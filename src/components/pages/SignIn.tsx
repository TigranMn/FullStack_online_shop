import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../store';
import firebase from 'firebase/app';
import { setUser } from '../../redux/userSlice';
import { useAppSelector } from '../../store';

export default function () {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSignIn = () => {
      console.log('sign in');
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
            <button type="submit">Sign in</button>
         </form>
      </Container>
   );
}
