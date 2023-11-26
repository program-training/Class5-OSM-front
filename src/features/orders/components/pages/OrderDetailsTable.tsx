import { useState } from "react";
import { Table, TableContainer, Paper, Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import OrderDetailsTableHead from "../OrderDetailsTable/OrderDetailsTableHead";
import OrderDetailsTableTop from "../OrderDetailsTable/OrderDetailsTableTop";
import OrderDetailsTableBottom from "../OrderDetailsTable/OrderDetailsTableBottom";
import OrderDetailsTableBody from "../OrderDetailsTable/OrderDetailsTableBody";

const OrderDetailsTable = () => {
  const { state } = useLocation();
  const cartItems = state.cartItems;
  const userId = state.userId;
  const customerNumber = userId;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCartItems = cartItems.filter((product: { name: string }) =>
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
