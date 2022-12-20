import { useNavigate } from 'react-router-dom';
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
import '../adminUsers/style.css';

function AdminLayout() {
   const navigate = useNavigate();

   return (
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
