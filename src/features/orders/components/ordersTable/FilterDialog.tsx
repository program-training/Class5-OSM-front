import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Box,
} from "@mui/material";
import FilterDialogProps from "../../interfaces/filter";

const FilterDialog: React.FC<FilterDialogProps> = ({
  open,
  onClose,
  selectedFilters,
  setSelectedFilters,
  filterStatus,
  setFilterStatus,
  setDateRangeStart,
  setDateRangeEnd,
  handleApplyFilters,
}) => {
  const handleFilterSelectionChange = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter Orders</DialogTitle>
      <DialogContent>
        <Box className="filter-container">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.includes("status")}
                  onChange={() => handleFilterSelectionChange("status")}
                />
              }
              label="Status"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.includes("dateRange")}
                  onChange={() => handleFilterSelectionChange("dateRange")}
                />
              }
              label="Date Range"
            />
          </FormGroup>

          {/* Status filter */}
          {selectedFilters.includes("status") && (
            <FormControl className="filter-form-control">
              <InputLabel>Status</InputLabel>
              <Select
                sx={{ width: "100px" }}
                value={filterStatus || ""}
                onChange={(e) =>
                  setFilterStatus(e.target.value as string | null)
                }
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="canceled">Canceled</MenuItem>
                <MenuItem value="sent">Sent</MenuItem>
                <MenuItem value="received">Received</MenuItem>
              </Select>
            </FormControl>
          )}

          {selectedFilters.includes("dateRange") && (
            <>
              <TextField
                label="Start Date"
                type="date"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDateRangeStart(e.target.value)}
              />
              <TextField
                label="End Date"
                type="date"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDateRangeEnd(e.target.value)}
              />
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleApplyFilters} color="primary">
          Apply Filters
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;
