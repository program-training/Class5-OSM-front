import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";

const SignInUpButton: FC<SignInUpButtonInterface> = ({ text, isValid }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          navigate("/24845t74yrgdch");
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

export default SignInUpButton;
