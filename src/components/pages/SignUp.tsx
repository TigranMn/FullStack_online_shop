import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Signup() {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const navigate = useNavigate();

   const handleAuth = (e: any) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
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
            const users = collection(db, 'users');
            addDoc(users, {
               name: firstName,
               lastName: lastName,
               email: user.email,
               id: user.uid,
               likedProducts: [],
               basket: []
            });
         })
         .finally(() => {
            setEmail('');
         });
   };

   return (
      <Container sx={{ mt: '20px' }}>
         <form onSubmit={handleAuth}>
            <input
               placeholder="Name"
               type="text"
               onChange={(e) => setFirstName(e.target.value)}
               value={firstName}
            />
            <br />
            <br />

            <input
               placeholder="Last name"
               type="text"
               onChange={(e) => setLastName(e.target.value)}
               value={lastName}
            />

            <br />
            <br />

            <input
               placeholder="Email"
               type="email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
            />
            <br />
            <br />

            <input
               placeholder="Password"
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
