import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

type FormControlFilterDialogProps = {
  filterStatus: string | null;
  setFilterStatus: React.Dispatch<React.SetStateAction<string | null>>;
};

const FormControlFilterDialog: FC<FormControlFilterDialogProps> = ({
  filterStatus,
  setFilterStatus,
}) => {
  return (
    <Box sx={{ padding: 2 }}>
      <FormControl className="filter-form-control">
        <InputLabel shrink={true}>Status</InputLabel>
        <Select
          sx={{ minWidth: "100px", color: "white" }}
          value={filterStatus || ""}
          onChange={(e) => setFilterStatus(e.target.value as string | null)}
          label="Status"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="canceled">Canceled</MenuItem>
          <MenuItem value="sent">Sent</MenuItem>
          <MenuItem value="received">Received</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormControlFilterDialog;
