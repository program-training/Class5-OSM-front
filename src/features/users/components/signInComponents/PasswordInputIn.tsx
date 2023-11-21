import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { PasswordInputInterface } from "../../interfaces/PasswordInputInterface";

const PasswordInputIn: FC<PasswordInputInterface> = ({
  register,
  errors,
  passwordValidet,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", passwordValidet)}
          helperText={errors.password?.message?.toString()}
          error={errors.password ? true : false}
        />
      </Grid>
    </>
  );
};

export default PasswordInputIn;
