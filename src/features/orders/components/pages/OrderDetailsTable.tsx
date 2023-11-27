import { useState } from "react";
import { Table, TableContainer, Paper, Box, Container } from "@mui/material";
// import { useLocation } from "react-router-dom";
import OrderDetailsTableHead from "../orderDetailsTable/OrderDetailsTableHead";
import OrderDetailsTableTop from "../orderDetailsTable/OrderDetailsTableTop";
import OrderDetailsTableBottom from "../orderDetailsTable/OrderDetailsTableBottom";
import OrderDetailsTableBody from "../orderDetailsTable/OrderDetailsTableBody";
import { useAppSelector } from "../../../../store/hooks";

const OrderDetailsTable = () => {
  const cartItems = useAppSelector((state) => state.orders.order);

  const customerNumber = cartItems.shippingDetails.userId;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCartItems = cartItems.cartItems.filter(
    (product: { name: string }) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        <OrderDetailsTableTop
          customerNumber={customerNumber}
          setSearchTerm={setSearchTerm}
        />
        <TableContainer
          component={Paper}
          sx={{ height: "100%", width: "100%" }}
        >
          <Table>
            <OrderDetailsTableHead />
            <OrderDetailsTableBody filteredCartItems={filteredCartItems} />
          </Table>
        </TableContainer>
        <OrderDetailsTableBottom />
      </Box>
    </Container>
  );
};

export default OrderDetailsTable;
