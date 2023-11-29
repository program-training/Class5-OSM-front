import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../../hooks/useAlerts";
import axios from "axios";
import SignInUpAlert from "../alert/SignInUpAlert";
import { getToken, setToken } from "../../../../services/localStorageService";
const URL = `${import.meta.env.VITE_BASE_URL}/api/users/login`;
const SignInButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const navigate = useNavigate();
  const { alert, handleAlertClose, showAlert } = useAlerts();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          const object = {
            email: watch("email"),
            password: watch("password"),
          };
          axios
            .post(URL, object)
            .then((res) => {
              console.log(res.data.resInfoObj.user.email, object.email);

              if (res.data.resInfoObj.user.email === object.email) {
                setToken(res.data.resInfoObj.token);
                console.log(getToken());

                showAlert(
                  "success",
                  "Sign in successful! Redirecting to orders page..."
                );

                setTimeout(() => {
                  navigate("/orders");
                }, 2000);
              } else {
                showAlert(
                  "error",
                  "Sign in failed. Incorrect email or password. Please try again."
                );
              }
            })
            .catch((error) => {
              showAlert("error", `Error: ${error.message}`);
              console.log(error);
            });
        }}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isValid}
      >
        {text}
      </Button>
      <SignInUpAlert alert={alert} handleAlertClose={handleAlertClose} />
    </>
  );
};

export default SignInButton;
