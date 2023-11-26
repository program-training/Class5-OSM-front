import React from "react";
import { useParams } from "react-router-dom";

const EditOrderPage: React.FC = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h2>Edit Order Page</h2>
      <p>Order ID: {orderId}</p>
    </div>
  );
};

export default EditOrderPage;
