import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { OrderProps } from "../../../interfaces/orderProps";

const OrdersButtonTable: FC<OrderProps> = ({ order }) => {
  const navigate = useNavigate();
  return (
    <>
      {order.status === "pending" && (
        <Button
          onClick={(event) => {
            event.stopPropagation();
            navigate("/EditOrderPage");
          }}
        >
          <EditIcon />
        </Button>
      )}
    </>
  );
};

export default OrdersButtonTable;
