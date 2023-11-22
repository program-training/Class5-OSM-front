// SearchField.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField: React.FC<SearchFieldProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <TextField
      label="Search by Order ID or User ID"
      variant="outlined"
      size="small"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        startAdornment: <SearchIcon color="action" />,
      }}
    />
  );
};

export default SearchField;
