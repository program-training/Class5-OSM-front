import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { EmailInputInterface } from "../interfaces/EmailInputInterface";

const EmailInput: FC<EmailInputInterface> = ({
  register,
  emailValidet,
  errors,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          {...register("email", emailValidet)}
          helperText={errors.email?.message?.toString()}
          error={errors.email ? true : false}
        />
      </Grid>
    </>
  );
};

export default EmailInput;
