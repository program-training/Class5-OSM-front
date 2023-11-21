// import SignUpButton from "../signUpComponents/SignUpButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FC } from "react";
import SignInButton from "./SignInButton";

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
      <SignInButton text="Sign In" isValid={isValid}></SignInButton>
    </>
  );
};

export default FooterSignIn;
