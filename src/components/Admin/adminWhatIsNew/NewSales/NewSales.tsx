import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { useState } from 'react';
import { TSales } from '../../../../types';

function NewSales() {
   const navigate = useNavigate();
   const [newSales, setNewSales] = useState<TSales[]>([]);

   console.log('new sales');

   return (
      <div>
         <h3>New sales List</h3>
         <br />
         <br />
         <Button onClick={() => navigate('/admin')} variant='contained' size='small'>
            Go back
         </Button>
         <br />
         <br />
         <table>
            <thead>
               <tr>
                  <th>N</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Gender</th>
                  <th>Color</th>
                  <th>Price $</th>
                  <th>Views</th>
                  <th>Quantity</th>
                  <th>Sales count</th>
               </tr>
            </thead>
            <tbody>
            </tbody>
         </table>
      </div>
   );
}

export default NewSales;
