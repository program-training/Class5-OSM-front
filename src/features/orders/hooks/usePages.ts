import { useState, MouseEvent } from "react";

const usePages = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    e: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("in handleChangeRowsPerPage");

    console.log(e.target.value);
    setRowsPerPage(parseInt(e.target.value, 10));

    // setPage(0);
  };

  return { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage };
};

export default usePages;
