import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//screens
import DashboardScreen from "./Screens/DashboardScreen";
import ProductScreen from "./Screens/ProductScreen";
import OrdersScreen from "./Screens/OrdersScreen";
import UsersScreen from "./Screens/UsersScreen";
import TransactionScreen from "./Screens/TransactionScreen";
import SideBar from "./Layout/sideBar";
import AddProduct from "./Screens/AddProduct";
import EditProductScreen from "./Screens/EditProductScreen";
import MarkOrderScreen from "./Screens/MarkOrderScreen";
import OutOfStock from "./Screens/OutOfStock";

function AdminRouter() {
  return (
    <div style={{ display: "flex" }}>
      <ToastContainer position="top-right" limit={1} />
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/transaction" element={<TransactionScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/:id/edit" element={<EditProductScreen />} />
          <Route path="/:id/orders/mark" element={<MarkOrderScreen />} />
          <Route path="/out-of-stock" element={<OutOfStock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRouter;
