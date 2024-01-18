import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//screens
import DashboardScreen from "../Screens/DashboardScreen";
import ProductScreen from "../Screens/ProductScreen";
import OrdersScreen from "../Screens/OrdersScreen";
import UsersScreen from "../Screens/UsersScreen";
import TransactionScreen from "../Screens/TransactionScreen";
import AddProduct from "../Screens/AddProduct";
import EditProductScreen from "../Screens/EditProductScreen";
import MarkOrderScreen from "../Screens/MarkOrderScreen";
import OutOfStock from "../Screens/OutOfStock";
import Loginin from "../auth/signin";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";

function AdminRouter() {
  const [token, setToken] = useState("");
  return (
    <div >
      
      {/* <SideBar /> */}
      <ToastContainer position="top-right" limit={1} />
      <Router>
        <Routes>
          <Route path="/login" element={<Loginin setToken={setToken} />} />
          {/* <PrivateRoute
            path="/dashboard"
            element={<DashboardScreen />}
            token={token}
          /> */}
          <Route
            path="/dashboard"
            element={<DashboardScreen />}
            // token={token}
          />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/transaction" element={<TransactionScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/:id/edit" element={<EditProductScreen />} />
          <Route path="/:id/orders/mark" element={<MarkOrderScreen />} />
          <Route path="/out-of-stock" element={<OutOfStock />} />
          {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default AdminRouter;
