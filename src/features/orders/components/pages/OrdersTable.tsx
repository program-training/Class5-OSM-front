import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  Container,
  Box,
  TablePagination,
} from "@mui/material";
import SearchField from "../ordersTable/SearchField";
import { useAppSelector } from "../../../../store/hooks";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/ordersBodyTable/OrdersBodyTable";
import useOrder from "../../hooks/useOrder";
import { filteredOrdersUtils } from "../../utils/orderUtils";

const OrdersTable = () => {
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { changeStatus } = useOrder(orders);
  const { handleChangePage, handleChangeRowsPerPage, data } =
    filteredOrdersUtils(
      orders,
      searchTerm,
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage
    );

  useEffect(() => {
    const timeoutId = setTimeout(changeStatus, 10000);
    return () => clearTimeout(timeoutId);
  }, [orders]);

  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TableContainer component={Paper}>
          <Table>
            <OrdersTableHead />
            <OrdersBodyTable currentOrders={data} />
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={orders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
};

export default OrdersTable;

// export default function PaginationControlled() {
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//   };

//   return (
//     <Stack spacing={2}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={10} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }
/////////////////////////////////////////////

// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// export default function CustomIcons() {
//   return (
//     <Stack spacing={2}>
//       <Pagination
//         count={10}
//         renderItem={(item) => (
//           <PaginationItem
//             slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//             {...item}
//           />
//         )}
//       />
//     </Stack>
//   );
// }
