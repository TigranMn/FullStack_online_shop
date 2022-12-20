import { useState, useEffect } from 'react';
import { TUser } from '../../../types';
import { getAllUsers } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

function AdminUsers() {
   const navigate = useNavigate();
   const [users, setUsers] = useState<TUser[]>([]);
   
   useEffect(() => {
      const fetchUsers = async () => {
         const fetched = await getAllUsers();
         setUsers(fetched);
         console.log(fetched);
      };
      fetchUsers();
   }, []);

   const handleUser = (id: string): void => {
      navigate(`/admin/user/${id}`);
   };

   return (
      <div>
         <h1>Users List</h1>
         <div>
         <table>
            <thead className='users_thead'>
               <tr>
                  <th>N</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>ID</th>
               </tr>
            </thead>
            <tbody>
            {users.map((item, index) => {
               return (
                  <tr key={item.id} className='users_tr' onClick={()=> handleUser(item.id!)}>
                     <td>{index+1}</td>
                     <th>{item.name}</th>
                     <th>{item.lastName}</th>
                     <th>{item.email}</th>
                     <th>{item.id}</th>
                  </tr>
               );
            } )}
            </tbody>
         </table>
         </div>
      </div>
   );
}

export default AdminUsers;
