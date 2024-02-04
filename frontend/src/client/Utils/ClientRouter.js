import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../Screens/ProductPage";
import ProductDetails from "../Screens/ProductDetails";
import ProductCart from "../Screens/ProductCart";
import ProductCheckout from "../Screens/ProductCheckout";

function ClientRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/details/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/checkout" element={<ProductCheckout />} />
        </Routes>
      </Router>
    </div>
  );
}
export default ClientRouter;
