import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  emailValidet,
  nameValidet,
  passwordValidet,
} from "../helpers/validation";
import { FieldValues, useForm } from "react-hook-form";
import { Copyright } from "../../layout/Copyright";
import SignInUpLink from "./SignInUpLink";
import SignInUpButton from "./SignInUpButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (event: FieldValues) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...register("firstName", nameValidet)}
                helperText={errors.firstName?.message?.toString()}
                error={errors.firstName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                autoFocus
                id="lastName"
                label="Last Name"
                autoComplete="family-name"
                {...register("lastName", nameValidet)}
                helperText={errors.lastName?.message?.toString()}
                error={errors.lastName ? true : false}
              />
            </Grid>
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
          </Grid>
          <SignInUpButton text="Sign Up" isValid={isValid} />
          <SignInUpLink text="signIn" />
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
