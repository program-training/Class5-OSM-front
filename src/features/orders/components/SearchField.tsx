import { Dispatch, useState, FC } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import FilterDialog from "./FilterDialog";
import { useAppSelector } from "../../../store/hooks";
import { setOrders } from "../ordersSlice";
import TuneIcon from "@mui/icons-material/Tune";

interface SearchFieldProps {
  searchTerm: string;
  setSearchTerm: Dispatch<React.SetStateAction<string>>;
}

const SearchField: FC<SearchFieldProps> = ({ searchTerm, setSearchTerm }) => {
  const orders = useAppSelector((state) => state.orders.orders);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterCustomer] = useState<boolean>(false);
  const [dateRangeStart, setDateRangeStart] = useState<string>("");
  const [dateRangeEnd, setDateRangeEnd] = useState<string>("");

  const handleOpenFilterDialog = () => {
    setOpenFilterDialog(true);
  };
  const handleCloseFilterDialog = () => {
    setOpenFilterDialog(false);
  };

  const handleApplyFilters = () => {
    if (orders) {
      const filteredOrders = orders.filter((order) => {
        if (filterStatus && order.status !== filterStatus) {
          return false;
        }
        if (filterCustomer && !order.shippingDetails?.userId) {
          return false;
        }
        if (
          dateRangeStart &&
          order.orderTime &&
          new Date(order.orderTime) < new Date(dateRangeStart)
        ) {
          return false;
        }
        if (
          dateRangeEnd &&
          order.orderTime &&
          new Date(order.orderTime) > new Date(dateRangeEnd)
        ) {
          return false;
        }
        return true;
      });

      setOrders(filteredOrders);
      handleCloseFilterDialog();
    }
  };

  return (
    <Box>
      <TextField
        label="Search by Order ID or User ID"
        sx={{
          margin: "10px",
        }}
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon color="action" />,
        }}
      />
      <IconButton>
        <TuneIcon onClick={handleOpenFilterDialog} className="filter-button" />
      </IconButton>
      <FilterDialog
        open={openFilterDialog}
        onClose={handleCloseFilterDialog}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        dateRangeStart={dateRangeStart}
        setDateRangeStart={setDateRangeStart}
        dateRangeEnd={dateRangeEnd}
        setDateRangeEnd={setDateRangeEnd}
        handleApplyFilters={handleApplyFilters}
        filterCustomer={false}
      />
    </Box>
  );
};

export default SearchField;
