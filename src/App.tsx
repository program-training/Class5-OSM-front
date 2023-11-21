import OrderManagementPage from "./features/orders/pages/OrderManagementPage/OrderManagementPage/OrderManagementPage";
import { sampleOrders } from "./features/orders/sampleData";

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <CssBaseline />
        <Header />
        <RouterDOM />
        <Footer />
      </ThemeProvider> */}
      console.log("yuj");
      <OrderManagementPage
        orders={sampleOrders}
        setOrders={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default App;
