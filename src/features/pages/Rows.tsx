import { TablePagination } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import usePages from "../orders/hooks/usePages";

const Rows = () => {
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePages();

  return (
    <TablePagination
      component="div"
      count={orders.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default Rows;
