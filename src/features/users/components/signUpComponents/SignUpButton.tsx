import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";

const SignUpButton: FC<SignInUpButtonInterface> = ({ text, isValid }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          navigate("/signIn");
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
