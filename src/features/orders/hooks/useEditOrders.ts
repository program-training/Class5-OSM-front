import { updateOrderDetails } from "../ordersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import editsOrderDetails from "../services/editsOrderDetails";
import { useAppSelector } from "../../../store/hooks";
import { editOrderForm } from "../interfaces/editOrderForm";

interface useEditOrdersProps {
  formValues: editOrderForm;
  setFormValues: React.Dispatch<React.SetStateAction<editOrderForm>>;
}

const useEditOrders = ({ formValues, setFormValues }: useEditOrdersProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useAppSelector(
    (state) => state.orders.order.shippingDetails
  );
  const orderId = useAppSelector((state) => state.orders.order._id);

  const handleSave = () => {
    formValues.orderType;
    dispatch(
      updateOrderDetails({
        orderId: orderId,
        newDetails: {
          address: formValues.address,
          contactNumber: formValues.contactNumber,
          orderType: formValues.orderType,
        },
      })
    );
    editsOrderDetails(orderId, {
      shippingDetails: {
        address: formValues.address,
        userId: cartItem.userId,
        contactNumber: formValues.contactNumber,
        orderType: formValues.orderType,
      },
    });
    navigate("/orders");
  };
  const handleCancel = () => {
    navigate("/orders");
  };

  const handleDeliveryMethodChange = (newMethod: string) => {
    const currentMethod = formValues.orderType;

    if (newMethod !== currentMethod) {
      const confirmChange = window.confirm(
        "Dear customer, changing the type of delivery may affect the price of the order. Do you want to continue?"
      );

      if (!confirmChange) {
        setFormValues({
          ...formValues,
          orderType: currentMethod,
        });
        return;
      }
    }

    setFormValues({
      ...formValues,
      orderType: newMethod,
    });
  };

  return { handleSave, handleCancel, handleDeliveryMethodChange };
};
export default useEditOrders;