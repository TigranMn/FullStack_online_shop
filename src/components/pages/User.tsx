import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeUser } from '../../redux/userSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function User() {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   return (
      <div>
         <h1>Email: {useAuth().email}</h1>
         <h2>ID: {useAuth().id}</h2>
         <Button
            onClick={() => {
               navigate('/signin');
               dispatch(removeUser());
               localStorage.removeItem('currentUser');
            }}
         >
            ВЫЙТИ
         </Button>
      </div>
   );
}
