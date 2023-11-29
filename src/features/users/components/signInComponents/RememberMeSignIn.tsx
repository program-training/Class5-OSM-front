// import SignUpButton from "../signUpComponents/SignUpButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch } from "../../../../store/hooks";
import { setRememberMe } from "../../../token/tokenSlice";

const FooterSignIn = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        onClick={() => {
          dispatch(setRememberMe(true));
        }}
      />
    </>
  );
};

export default FooterSignIn;
