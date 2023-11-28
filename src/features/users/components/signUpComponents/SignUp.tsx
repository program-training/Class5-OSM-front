import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { emailValidet, passwordValidet } from "../../helpers/validation";
import { FieldValues, useForm } from "react-hook-form";
import SignUpButton from "./SignUpButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ConfirmPasswordInputIn from "./ConfirmPasswordInput";
import { useState } from "react";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(event.target.checked);
  };

  const onSubmit = (data: FieldValues) => {
    // אפשר לגשת לערך isAdmin באמצעות data.isAdmin
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <EmailInput
              register={register}
              errors={errors}
              emailValidet={emailValidet}
            />
            <PasswordInput
              register={register}
              errors={errors}
              passwordValidet={passwordValidet}
            />
            <ConfirmPasswordInputIn
              register={register}
              errors={errors}
              watch={watch}
            />
            {/* Styled Checkbox for Administrator */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("isAdmin")}
                    checked={isAdmin}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    Sign up as an Administrator
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <SignUpButton text="Sign Up" isValid={isValid} />
        </Box>
      </Box>
    </Container>
  );
};
