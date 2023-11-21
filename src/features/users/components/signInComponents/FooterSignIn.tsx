import SignInUpButton from "../signUpComponents/SignInUpButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FC } from "react";

export interface FooterSignInInterface {
  isValid: boolean;
}

const FooterSignIn: FC<FooterSignInInterface> = ({ isValid }) => {
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <SignInUpButton text="Sign In" isValid={isValid}></SignInUpButton>
    </>
  );
};

export default FooterSignIn;
