import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";

import "./App.css";
import { useEffect } from "react";
import getAllOrders from "./features/orders/services/GetAllOrders";
import { setFilteredOrders, setOrders } from "./features/orders/ordersSlice";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        if (data) {
          dispatch(setOrders(data));
          dispatch(setFilteredOrders(data));
        }
      } catch (error) {
        console.error("Error connecting to the orders server");
      }
    };

    fetchData();
  }, [dispatch]);

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
