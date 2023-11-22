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
} from "@mui/material";
import "../css/FilterDialog.css";
import FilterDialogProps from "../interfaces/filter";

const FilterDialog: React.FC<FilterDialogProps> = ({
  open,
  onClose,
  selectedFilters,
  setSelectedFilters,
  filterStatus,
  setFilterStatus,
  // filterCustomer,
  dateRangeStart,
  setDateRangeStart,
  // dateRangeEnd,
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
        <div className="filter-container">
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
                  checked={selectedFilters.includes("customer")}
                  onChange={() => handleFilterSelectionChange("customer")}
                />
              }
              label="Customer"
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
                value={filterStatus || ""}
                onChange={(e) =>
                  setFilterStatus(e.target.value as string | null)
                }
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="pickup">Pickup</MenuItem>
                <MenuItem value="sent">Sent</MenuItem>
                <MenuItem value="received">Received</MenuItem>
              </Select>
            </FormControl>
          )}

          {/* Customer filter */}
          {selectedFilters.includes("customer") && (
            <FormControl className="filter-form-control">
              <InputLabel>Customer ID</InputLabel>
              <TextField
                variant="outlined"
                value={dateRangeStart}
                onChange={(e) => setDateRangeStart(e.target.value)}
              />
            </FormControl>
          )}

          {/* Date Range filter */}
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
        </div>
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
