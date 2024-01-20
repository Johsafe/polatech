import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../Screens/ProductPage";
import ProductDetails from "../Screens/ProductDetails";
import ProductCart from "../Screens/ProductCart";

function ClientRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default ClientRouter;
