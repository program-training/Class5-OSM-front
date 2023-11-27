import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../../../store/hooks";
import TextField from "@mui/material/TextField";

const OrderDetailsOrderTime = () => {
  const orderTime = useAppSelector((state) => state.orders.order.orderTime);
  return (
    <Grid item xs={12}>
      <TextField
        disabled
        label="Order Time"
        fullWidth
        value={orderTime}
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 2 }}
      />
    </Grid>
  );
};

export default OrderDetailsOrderTime;
