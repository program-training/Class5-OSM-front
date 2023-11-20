import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { PasswordInputInterface } from "../interfaces/PasswordInputInterface";

const PasswordInput: FC<PasswordInputInterface> = ({
  register,
  passwordValidet,
  errors,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          {...register("password", passwordValidet)}
          helperText={errors.password?.message?.toString()}
          error={errors.password ? true : false}
        />
      </Grid>
    </>
  );
};

export default PasswordInput;
