import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
// import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import GetAllOrders from "./features/orders/utils/GetAllOrders";
// import GetAllOrders from "./features/orders/utils/GetAllOrders";
import "./App.css";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  GetAllOrders();

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
