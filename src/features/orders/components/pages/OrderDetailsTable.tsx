import { useEffect, useState } from "react";
import { Table, TableContainer, Paper, Box, Container } from "@mui/material";
import OrderDetailsTableTop from "../OrderDetailsTable/OrderDetailsTableTop";
import OrderDetailsTableHead from "../OrderDetailsTable/OrderDetailsTableHead";
import OrderDetailsTableBody from "../OrderDetailsTable/OrderDetailsTableBody";
import OrderDetailsTableBottom from "../OrderDetailsTable/OrderDetailsTableBottom";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../../layout/NotFoundPage/NotFoundPage";
import Product from "../../interfaces/product";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import getOrderByID from "../../service/getOrderById";

const OrderDetailsTable = () => {
  const { orderId } = useParams();
  const dispatch = useAppDispatch();
  const {
    order,
    error,
    pending: loading,
  } = useAppSelector((state) => state.orders);
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getOrderByID(orderId as string));
    if (order) {
      const filteredCartItems = order.cartItems.filter(
        (product: { name: string }) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filteredCartItems);
    }
  }, [searchTerm, orderId]);

  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error}</p>;
  if (!loading && !order) return <NotFoundPage />;
  return (
    <Container>
      {order && (
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
            customerNumber={order._id}
            setSearchTerm={setSearchTerm}
          />
          <TableContainer
            component={Paper}
            sx={{ height: "100%", width: "100%" }}
          >
            <Table>
              <OrderDetailsTableHead />
              <OrderDetailsTableBody
                filteredCartItems={filteredItems}
                totalPrice={order.price}
                totalQuantity={order.cartItems.length}
              />
            </Table>
          </TableContainer>
          <OrderDetailsTableBottom />
        </Box>
      )}
    </Container>
  );
};

export default OrderDetailsTable;
