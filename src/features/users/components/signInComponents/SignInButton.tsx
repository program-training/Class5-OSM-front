import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";

const SignInButton: FC<SignInUpButtonInterface> = ({ text, isValid }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          navigate("/orders");
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

export default SignInButton;
