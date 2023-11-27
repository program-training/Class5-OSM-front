import { Button } from "@mui/material";
import { FC } from "react";
import { SignInUpButtonInterface } from "../../interfaces/SignInUpButtonInterface";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setSignUpObject } from "../../usersSlice";

const SignUpButton: FC<SignInUpButtonInterface> = ({
  text,
  isValid,
  watch,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const signUpObject = useAppSelector((store) => store.users.signUpObject);
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          navigate("/signIn");
          dispatch(
            setSignUpObject({
              email: watch("email"),
              password: watch("password"),
              isAdmin: true,
            })
          );
          axios
            .post("http://localhost:3000/api/users/signup/", signUpObject)
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
