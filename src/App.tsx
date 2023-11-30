import { ThemeProvider } from "@mui/material/styles";
import { useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
// import { useEffect, useState } from "react";
// import Spinner from "./Spinner";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return (
  //     <>
  //       <ThemeProvider theme={themeMode ? themeLight : themeDark}>
  //         <CssBaseline />
  //         <Spinner />;
  //       </ThemeProvider>
  //     </>
  //   );
  // }

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
