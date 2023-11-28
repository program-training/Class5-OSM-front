import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}/api/users`;

const SignUpButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          navigate("/signIn");
          const object = {
            email: watch("email"),
            password: watch("password"),
            isAdmin: true,
          };

          console.log(object);

          axios
            .post(`${URL}/signup/`, object)
            .then((res) => console.log(res.data));
        }}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isValid}
      >
        {text}
      </Button>
    </>
  );
};

export default SignUpButton;
