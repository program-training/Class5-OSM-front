import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import { getToken } from "./services/localStorageService";
import { setToken } from "./features/token/tokenSlice";
import Spinner from "./Spinner";
import "./App.css";

const App = () => {
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
