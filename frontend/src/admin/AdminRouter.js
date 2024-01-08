import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//screens
import DashboardScreen from './Screens/DashboardScreen';
import ProductScreen from './Screens/ProductScreen';
import CategoryScreen from './Screens/CategoryScreen';
import OrdersScreen from './Screens/OrdersScreen';
import UsersScreen from './Screens/UsersScreen';
import TransactionScreen from './Screens/TransactionScreen';
import SideBar from './Layout/sideBar';
import AddProduct from './Screens/AddProduct';
import EditProductScreen from './Screens/EditProductScreen';
import MarkOrderScreen from './Screens/MarkOrderScreen';
import EditCategoryScreeen from './Screens/EditCategoryScreeen';

function AdminRouter() {
  return (
    <div>
      <ToastContainer position="top-right" limit={1} />
      <Router>
        <SideBar>
          <Routes>
            <Route path="/side" element={<SideBar />} />
            <Route path="/" element={<DashboardScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/product" element={<ProductScreen />} />
            <Route path="/category" element={<CategoryScreen />} />
            <Route path="/orders" element={<OrdersScreen />} />
            <Route path="/transaction" element={<TransactionScreen />} />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit" element={<EditProductScreen />} />
            <Route path="/orders/mark" element={<MarkOrderScreen />} />
            <Route path="/editCategory" element={<EditCategoryScreeen />} />

          </Routes>
        </SideBar>
      </Router>
    </div>
  );
}

export default AdminRouter;
