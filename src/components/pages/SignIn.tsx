import React, { useState } from 'react';
import { Container } from '@mui/material';
import { useAppDispatch } from '../../store';
import { setUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

export default function SignIn() {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const getUserData = async (id: string) => {
      const users = await getDocs(collection(db, 'users'));
      let result: any[] = [];
      users.forEach((user) => {
         result.push(user.data());
      });
      let esim = result.find((user) => user.id === id);
      return esim;
   };

   const handleSignIn = (e: React.SyntheticEvent) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
         .then(async ({ user }) => {
            const data = await getUserData(user.uid);
            dispatch(
               setUser({
                  email: user?.email,
                  token: user?.refreshToken,
                  id: user?.uid,
                  name: data?.name,
                  lastName: data?.lastName
               })
            );
            navigate('/shop');
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
