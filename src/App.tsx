import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Footer from "./features/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  console.log("bal bla bla menash tilmad git!!!");

  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        <Header />
        <RouterDOM />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
