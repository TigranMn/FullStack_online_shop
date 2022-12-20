import { useNavigate, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';

//styles
import './style.css';
import '../adminProducts/style.css';
import '../adminProducts/productsList/style.css';
import '../adminProducts/productsSearching/style.css';
import '../adminProducts/addProducts/style.css';
import '../adminProducts/changeProduct/style.css';
import '../adminWhatIsNew/style.css';
import '../adminWhatIsNew/LessQuantityProd/style.css';
import { useAppSelector } from '../../../store';
import { AccStatus } from '../../../types';
import '../adminUsers/style.css';

function AdminLayout() {
   const status = useAppSelector((state) => state.user.status);
   const navigate = useNavigate();
   console.log(AccStatus.ADMIN, status);

   return status !== AccStatus.ADMIN ? (
      <Navigate to={'/shop'} />
   ) : (
      <>
         <div>
            <div className='nav_bar'>
               <ul className='nav_bar_ul'>
                  <li onClick={() => navigate('/admin')}>What is new</li>
                  <li onClick={() => navigate('/admin/products')}>Products</li>
                  <li onClick={() => navigate('/admin/users')}>Users</li>
                  <li onClick={() => navigate('/admin/sales')}>Sales</li>
                  <li onClick={() => navigate('/admin/messages')}>Messages</li>
                  <li onClick={() => navigate('/admin/faq')}>FAQ</li>
               </ul>
            </div>
         </div>
         <div className='admin_body'>
            <Outlet />
         </div>
      </>
   );
}
export default AdminLayout;
