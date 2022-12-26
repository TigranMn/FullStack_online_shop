import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

import { getAllUsers } from '../../../../api/api';
import { getOldUsersId, setNewUsersIdInDatabase } from '../whatIsNewAPI/whatIsNewAPI';

import { TUser } from '../../../../types';

function NewUsers () {
   const navigate = useNavigate();
   const [newUsers, setNewUsers] = useState<TUser[]>([]);

   useEffect(() => {
      const fetchNewUsers = async () => {
         const filteredNewUsers: TUser[] = [];
         const filteredNewUsersId: string[] = [];
         const allUsers: TUser[] = await getAllUsers();
         const prevUsersId: string[] = await getOldUsersId();
         allUsers.forEach((user: TUser) => {
            if (!prevUsersId.includes(user.id!)) {
               filteredNewUsers.push(user);
               filteredNewUsersId.push(user.id!);
            }
         });
         setNewUsers(filteredNewUsers);
         window.localStorage.setItem('newUsersId', JSON.stringify(filteredNewUsersId));
      };
      fetchNewUsers();
      return () => {
         const passUsersIdToDatabase = async () => {
            const usersId = JSON.parse(window.localStorage.getItem('newUsersId')!) as string[];
            await setNewUsersIdInDatabase(usersId);
         };
         passUsersIdToDatabase();
      };
   }, []);

   const handleUser = (id: string): void => {
      navigate(`/admin/user/${id}`);
   };

   console.log('new users');


   return (
      <div>
         <h3>New Users List</h3>
         <br />
         <br />
         <Button onClick={() => navigate('/admin')} variant='contained' size='small'>
            Go back
         </Button>
         <br />
         <br />
        
      </div>
   );
}

export default NewUsers;
