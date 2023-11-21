import { Grid, TextField } from "@mui/material";
import { ConfirmPasswordInterface } from "../../interfaces/ConfirmPasswordInterface";
import { FC } from "react";

const ConfirmPasswordInput: FC<ConfirmPasswordInterface> = ({
  register,
  errors,
  watch,
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        label="Confirm Password"
        type="password"
        id="confirm_password"
        autoComplete="confirm password"
        {...register("confirm_password", {
          required: true,
          validate: (val: string) => {
            if (watch("password") != val) {
              console.log(watch("password"));

              return "Your passwords do no match";
            }
          },
        })}
        helperText={errors.confirm_password?.message?.toString()}
        error={errors.confirm_password ? true : false}
      />
    </Grid>
  );
};

export default ConfirmPasswordInput;
