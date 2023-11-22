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
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import GetAllOrders from "../utils/GetAllOrders";
import { useEffect } from "react";

interface OrdersTableProps {
  handleCancel: (orderId: string) => void;
  handleReceive: (orderId: string) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  handleCancel,
  handleReceive,
}) => {
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       await GetAllOrders();
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  const navigate = useNavigate();
  const orders = useAppSelector((state) => state.orders.orders);

  if (orders && !orders.length) return <p>no orders!!!!</p>;
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
          {orders &&
            orders.length &&
            orders.map((order) => {
              return (
                <TableRow
                  key={order._id}
                  onClick={() =>
                    navigate("/orderDetails", {
                      state: {
                        cartItems: order.cartItems,
                        userId: order.shippingDetails.userId,
                      },
                    })
                  }
                >
                  <TableCell>{order.orderTime?.toString()}</TableCell>
                  <TableCell>{order?._id}</TableCell>
                  <TableCell>{order.shippingDetails?.userId}</TableCell>
                  <TableCell>{order.shippingDetails?.address}</TableCell>
                  <TableCell>{order.shippingDetails?.contactNumber}</TableCell>
                  <TableCell>{order.shippingDetails?.orderType}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    {order.status === "pending" && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleCancel(order._id);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                    {order.shippingDetails?.orderType === "pickup" &&
                      order.status === "pending" && (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleReceive(order._id);
                          }}
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
function setOrdersAction(orders: void): any {
  throw new Error("Function not implemented.");
}
