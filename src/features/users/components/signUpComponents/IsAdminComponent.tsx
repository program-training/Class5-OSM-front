// With God's Help

import { Checkbox, FormControlLabel } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setIsadmin } from "../../usersSlice";

const IsAdminComponent = () => {
  const dispatch = useAppDispatch();
  const isadmin = useAppSelector((store) => store.users.isadmin);
  return (
    <>
      {" "}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Admin"
        id="admin"
        onSelect={() => {
          dispatch(setIsadmin(!isadmin));
        }}
      />
    </>
  );
};

export default IsAdminComponent;
