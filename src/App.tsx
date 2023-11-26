import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
// import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import GetAllOrders from "./features/orders/utils/GetAllOrders";
import "./App.css";
import { setFilteredOrders } from "./features/orders/ordersSlice";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);

  GetAllOrders();
  const orders = useAppSelector((store) => store.orders.orders);
  const dispatch = useAppDispatch();
  dispatch(setFilteredOrders(orders));
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        <Header />
        <RouterDOM />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
