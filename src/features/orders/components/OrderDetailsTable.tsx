import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../css/OrdersTable.css";
import { useLocation } from "react-router-dom";
import Product from "../interfaces/product";
import "../css/OrdersTable.css";

const OrderDetailsTable = () => {
  const { state } = useLocation();
  const cartItems = state.cartItems;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((products: Product) => (
            <TableRow key={products._id}>
              <TableCell>{products._id}</TableCell>
              <TableCell>{products.name}</TableCell>
              <TableCell>{products.description}</TableCell>
              <TableCell>{products.quantity}</TableCell>
              <TableCell>{products.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderDetailsTable;
