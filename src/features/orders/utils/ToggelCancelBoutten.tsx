import { Box, Button, Switch } from "@mui/material";
import { FC, useState } from "react";
import Order from "../interfaces/order";

type ToggleCancelButtonProps = { orders: Order[] };

type OrderItemProps = {
  order: Order;
  canCancel: boolean;
};

const ToggleCancelButton: FC<ToggleCancelButtonProps> = ({ orders }) => {
  const [cancelOnlyPending, setCancelOnlyPending] = useState(true);

  <Switch
    checked={cancelOnlyPending}
    onChange={() => setCancelOnlyPending((prev) => !prev)}
  />;

  {
    orders.map((order) => (
      <OrderItem
        order={order}
        key={order._id}
        canCancel={cancelOnlyPending ? order.status === "PENDING" : true}
      />
    ));
  }

  const OrderItem = ({ order, canCancel }: OrderItemProps) => {
    const cancelOrder = () => {
      if (!canCancel) return;

      // logic to cancel order
    };

    return (
      <Box>
        {order.Price}

        <Button disabled={!canCancel} onClick={cancelOrder}>
          Cancel
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Switch
        checked={cancelOnlyPending}
        onChange={() => setCancelOnlyPending((prev) => !prev)}
      />

      {orders.map((order) => (
        <OrderItem
          order={order}
          canCancel={cancelOnlyPending ? order.status === "PENDING" : true}
        />
      ))}
    </>
  );
};

export default ToggleCancelButton;
