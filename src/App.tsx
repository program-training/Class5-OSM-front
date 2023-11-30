import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { setFilteredOrders, setOrders } from "./features/orders/ordersSlice";
import getAllOrders from "./features/orders/service/getAllOrders";
import Spinner from "./Spinner";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <ThemeProvider theme={themeMode ? themeLight : themeDark}>
          <CssBaseline />
          <Spinner />
        </ThemeProvider>
      </>
    );
  }

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
