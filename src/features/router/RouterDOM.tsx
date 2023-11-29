import { Routes, Route } from "react-router-dom";
import SignInPage from "../users/pages/SignInPage";
import SignUpPage from "../users/pages/SignUpPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../layout/NotFoundPage/NotFoundPage";
import OrderManagementPage from "../orders/pages/OrderManagementPage";
import OrderDetailsPage from "../orders/pages/OrderDetailsPage";
import EditOrderPage from "../orders/components/pages/EditOrderPage";
import { useAppSelector } from "../../store/hooks";
import NotLoggedInPage from "../layout/NotLoggedInPage/NotLoggedInPage";
const RouterDom = () => {
  const token = useAppSelector((store) => store.token.token);
  return (
    <Routes>
      <Route path="/oms" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/orderDetails" element={<OrderDetailsPage />} />
      <Route
        path="/orders"
        element={
          token === "loggedin" ? <OrderManagementPage /> : <NotLoggedInPage />
        }
      />
      <Route path="/editOrderPage" element={<EditOrderPage />} />
    </Routes>
  );
};
export default RouterDom;
