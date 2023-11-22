import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "../css/OrdersTable.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import GetAllOrders from "../utils/GetAllOrders";

const OrdersTable = () => {
  GetAllOrders();
  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.orders.orders);
  console.log(orders);

  if (orders && !orders.length) return <p>no orders!!!!</p>;

  if (orders && orders.length)
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Time</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Order Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              return (
                <TableRow key={order._id}>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.orderTime.toString()}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order._id}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.shippingDetails.userId}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.shippingDetails.address}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.shippingDetails.contactNumber}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.shippingDetails.orderType}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.Price}
                  </TableCell>
                  <TableCell
                    onClick={() =>
                      navigate("/orderDetails", {
                        state: { cartItems: order.cartItems },
                      })
                    }
                  >
                    {order.status}
                  </TableCell>
                  <TableCell>
                    {order.status === "pending" && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        // onClick={() => handleCancelOrder(order._id)}
                      >
                        Cancel
                      </Button>
                    )}
                    {order.shippingDetails.orderType === "pickup" &&
                      order.status === "pending" && (
                        <Button
                          variant="outlined"
                          color="primary"
                          // onClick={() => handleReceiveOrder(order._id)}
                        >
                          Receive
                        </Button>
                      )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default OrdersTable;
