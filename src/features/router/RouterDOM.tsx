import { Routes, Route } from "react-router-dom";
import SignInPage from "../users/pages/SignInPage";
import SignUpPage from "../users/pages/SignUpPage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
import OrderManagementPage from "../orders/pages/OrderManagementPage";
import OrderDetailsPage from "../orders/pages/OrderDetailsPage";
import EditOrderPage from "../orders/components/pages/EditOrderPage";
import HomePage from "../pages/HomePage";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/orderDetails" element={<OrderDetailsPage />} />
      <Route path="/orders" element={<OrderManagementPage />} />
      <Route path="/editOrderPage" element={<EditOrderPage />} />
    </Routes>
  );
};
export default RouterDom;
