import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./features/layout/header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Spinner from "./features/spinner/Spinner";
import HeaderLoggedIn from "./features/layout/headerLoggedIn/HeaderLoggedIn";
import { getToken } from "./services/localStorageService";
import { setToken } from "./features/token/tokenSlice";
import { setLoading } from "./features/spinner/spinnerSlice";

const App = () => {
  const token = useAppSelector((store) => store.token.token);
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const loading = useAppSelector((store) => store.spinner.loading);
  const isLogged = getToken();
  const dispatch = useAppDispatch();
  console.log("logg:  " + isLogged, token);

  if (loading) {
    dispatch(setToken(isLogged));
    setTimeout(() => dispatch(setLoading(false)), 1000);
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
