import { Routes, Route } from "react-router-dom";
import SignInPage from "../users/pages/SignInPage";
import SignUpPage from "../users/pages/SignUpPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
import OrderManagementPage from "../orders/pages/OrderManagementPage";
import OrderDetailsPage from "../orders/pages/OrderDetailsPage";
// import ProductCarousel from "../orders/components/ProductCarousel";
const RouterDom = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/orderDetails" element={<OrderDetailsPage />} />
      {/* <Route path="/ProductCarousel" element={<ProductCarousel />} /> */}
      <Route path="orders" element={<OrderManagementPage />} />
    </Routes>
  );
};
export default RouterDom;
