// import SignUpButton from "../signUpComponents/SignUpButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FooterSignIn = () => {
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </>
  );
};

export default FooterSignIn;
