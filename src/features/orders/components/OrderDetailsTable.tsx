import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Product from "../interfaces/product";

const OrderDetailsTable = () => {
  const { state } = useLocation();
  const cartItems = state.cartItems;

  // Sample order and customer numbers
  const orderNumber = "כאן יהיה מס' ההזמנה";
  const customerNumber = "כאן יהיה מס' הלקוח";

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate total price and total quantity
  const totalPrice = cartItems.reduce(
    (acc: number, product: { price: number; quantity: number }) =>
      acc + product.price * product.quantity,
    0
  );
  const totalQuantity = cartItems.reduce(
    (acc: unknown, product: { quantity: unknown }) => acc + product.quantity,
    0
  );

  // Filter cartItems based on search input
  const filteredCartItems = cartItems.filter((product: { name: string }) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Order and Customer Numbers */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Order Number: {orderNumber}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Customer Number: {customerNumber}
        </Typography>
      </div>

      {/* Search Bar with Magnifying Glass Icon */}
      <div style={{ marginLeft: "10px", marginBottom: "20px" }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Table */}
      <TableContainer
        component={Paper}
        style={{ height: "100%", width: "100%" }}
      >
        {/* <TableContainer component={Paper} style={{ flex: 1, width: "100%" }}> */}
        <Table>
          <TableHead>
            {/* Add style to the TableRow */}
            <TableRow style={{ backgroundColor: "lightblue" }}>
              <TableCell style={{ minWidth: 212 }}>Product ID</TableCell>
              <TableCell style={{ minWidth: 150 }}>Name</TableCell>
              <TableCell style={{ minWidth: 400 }}>Description</TableCell>
              <TableCell style={{ minWidth: 100 }}>Quantity</TableCell>
              <TableCell style={{ minWidth: 100 }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCartItems.map((product: Product) => (
              <TableRow key={product._id}>
                <TableCell>{product._id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
            {/* Total Amount and Total Quantity Row */}
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ alignSelf: "flex-start" }}
                >
                  Total Quantity: {totalQuantity}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ alignSelf: "flex-start" }}
                >
                  Total Price: ${totalPrice.toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Return Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginRight: "20px" }}></div>
        {/* Return Button */}
        <div>
          <Link to="/orders">
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
