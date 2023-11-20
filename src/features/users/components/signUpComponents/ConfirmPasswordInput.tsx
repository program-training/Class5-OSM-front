import { Grid, TextField } from "@mui/material";

const ConfirmPasswordInput = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="confirm password"
          type="password"
          id="confirm password"
          autoComplete="confirm password"
        />
      </Grid>
    </>
  );
};

export default ConfirmPasswordInput;
