import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { setFilteredOrders, setOrders } from "./features/orders/ordersSlice";
import getAllOrders from "./features/orders/service/getAllOrders";
import Spinner from "./features/spinner/Spinner";
import HeaderLoggedIn from "./features/layout/HeaderLoggedIn/HeaderLoggedIn";
import { getToken } from "./services/localStorageService";
import { setToken } from "./features/token/tokenSlice";
import { setLoading } from "./features/spinner/spinnerSlice";

const App = () => {
  const token = useAppSelector((store) => store.token.token);
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.spinner.loading);
  const isLogged = getToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setToken(isLogged));
        console.log("logg:  " + isLogged, token);
        const data = await getAllOrders();
        if (data) {
          dispatch(setOrders(data));
          dispatch(setFilteredOrders(data));
        }
      } catch (error) {
        console.error("Error connecting to the orders server");
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Spinner />;
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        {isLogged === "loggedin" || token === "loggedin" ? (
          <HeaderLoggedIn />
        ) : (
          <Header />
        )}
        <RouterDOM />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
