import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';
import { resetError, signUp } from '../../redux/userSlice';
import { useNotify } from '../../hooks/useNotify';
import { notificationTypes } from '../../types';

export default function Signup() {
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const navigate = useNavigate();
   const userState = useAppSelector((state) => state.user);
   const notify = useNotify();

   useEffect(() => {
      if (userState.isLogged) {
         localStorage.setItem('currentUser', JSON.stringify(userState));
         navigate('/user');
      }
   }, [userState.isLogged]);

   const handleAuth = async (e: any) => {
      e.preventDefault();
      await dispatch(
         signUp({ email, password, firstName, lastName } as {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
         })
      )
         .unwrap()
         .catch((e) => notify(notificationTypes.ERROR, e.message));
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
               type="text"
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
