import { useState } from "react";
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
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Product from "../interfaces/product";
import { useAppSelector } from "../../../store/hooks";

const OrderDetailsTable = () => {
  const price = useAppSelector((state) => state.orders.price);
  const { state } = useLocation();
  const cartItems = state.cartItems;
  const userId = state.userId;

  // Sample  customer numbers
  const customerNumber = userId;

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  const totalQuantity = cartItems.reduce(
    (acc: number, product: { quantity: number }) => acc + product.quantity,
    0
  );

  // Filter cartItems based on search input
  const filteredCartItems = cartItems.filter((product: { name: string }) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Order and Customer Numbers */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Customer Number: {customerNumber}
        </Typography>
        {/* <Typography>
          <hr />
        </Typography> */}
      </Box>

      {/* Search Bar with Magnifying Glass Icon */}
      <Box style={{ marginLeft: "10px", marginBottom: "20px" }}>
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
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        style={{ height: "100%", width: "100%" }}
      >
        {/* <TableContainer component={Paper} style={{ flex: 1, width: "100%" }}> */}
        <Table sx={{ backgroundColor: "#7eb3bd" }}>
          <TableHead>
            {/* Add style to the TableRow */}

            <TableRow sx={{ backgroundColor: "#6daab5" }}>
              <TableCell style={{ minWidth: 150, fontSize: "20px" }}>
                Name
              </TableCell>
              <TableCell style={{ minWidth: 400, fontSize: "20px" }}>
                Description
              </TableCell>
              <TableCell style={{ minWidth: 100, fontSize: "20px" }}>
                Quantity
              </TableCell>
              <TableCell style={{ minWidth: 100, fontSize: "20px" }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCartItems.map((product: Product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
            {/* Total Amount and Total Quantity Row */}
            <TableRow>
              <TableCell colSpan={2}></TableCell>
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
                  Total Price: ${price}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Return Button */}
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginBottom: "20px",
        }}
      >
        <Box style={{ marginRight: "20px" }}></Box>
        {/* Return Button */}
        <Box>
          <Link to="/orders">
            <Button variant="contained" sx={{ margin: "20px" }}>
              Go Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderDetailsTable;
