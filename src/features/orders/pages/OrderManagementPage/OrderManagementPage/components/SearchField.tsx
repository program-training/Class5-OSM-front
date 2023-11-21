import React from "react";
import TextField from "@mui/material/TextField";
import "../css/SearchField.css";

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
      label="Search by product name or customer ID"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-field"
    />
  );
};

export default SearchField;
