import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useAppSelector } from "../../../../store/hooks";

interface EditOrderForm {
  address: string;
  contactNumber: string;
  orderType: string;
}

const EditOrderPage: React.FC = () => {
  const cartItem = useAppSelector(
    (state) => state.orders.order.shippingDetails
  );
  const orderId = useAppSelector((state) => state.orders.order._id);
  const orderTime = useAppSelector((state) => state.orders.order.orderTime);

  const [formValues, setFormValues] = useState<EditOrderForm>({
    address: cartItem.address,
    contactNumber: cartItem.contactNumber,
    orderType: cartItem.orderType,
  });

  const handleSave = () => {};

  const handleDeliveryMethodChange = (newMethod: string) => {
    const currentMethod = formValues.orderType;

    // הודעה קופצת
    if (newMethod !== currentMethod) {
      const confirmChange = window.confirm(
        "Dear customer, changing the type of delivery may affect the price of the order. Do you want to continue?"
      );

      if (!confirmChange) {
        // אם הלקוח אישר את ההודעה את כאן הוא משנה את המשלוח
        setFormValues({
          ...formValues,
          orderType: currentMethod,
        });
        return;
      }
    }

    // עדכון המשלוח
    setFormValues({
      ...formValues,
      orderType: newMethod,
    });
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Edit Order
        </Typography>
        <Typography variant="h6" gutterBottom>
          Order ID: {orderId}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <TextField
            label="Order Time"
            fullWidth
            value={orderTime}
            InputProps={{
              readOnly: true,
            }}
            sx={{ mb: 2 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            value={formValues.address}
            onChange={(e) =>
              setFormValues({ ...formValues, address: e.target.value })
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            fullWidth
            value={formValues.contactNumber}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                contactNumber: e.target.value,
              })
            }
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="deliveryMethodLabel">Delivery Method</InputLabel>
            <Select
              labelId="deliveryMethodLabel"
              value={formValues.orderType}
              onChange={(e) =>
                handleDeliveryMethodChange(e.target.value as string)
              }
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="express">Express</MenuItem>
              <MenuItem value="pickup">Pickup</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default EditOrderPage;
