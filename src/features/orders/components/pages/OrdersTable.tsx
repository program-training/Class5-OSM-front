import { useEffect } from "react";
import { Table, TableContainer, Paper, Container, Box } from "@mui/material";
import SearchField from "../ordersTable/SearchField";
import { useAppSelector } from "../../../../store/hooks";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/ordersBodyTable/OrdersBodyTable";
import useOrder from "../../hooks/useOrder";
import usePages from "../../hooks/usePages";
import { filterArrayOfObjects, sliceRowsPerPage } from "../../../utils/utils";
import useTerm from "../../hooks/useTerm";
import Rows from "../../../pages/Rows";

const OrdersTable = () => {
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const { page, rowsPerPage } = usePages();
  const { searchTerm } = useTerm();
  const { changeStatus } = useOrder(orders);
  const filteredOrders = filterArrayOfObjects(
    orders,
    "_id" || "shippingDetails.userId",
    searchTerm
  );
  const data = sliceRowsPerPage(filteredOrders, rowsPerPage, page);

  useEffect(() => {
    const timeoutId = setTimeout(changeStatus, 10000);
    return () => clearTimeout(timeoutId);
  }, [orders]);

  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SearchField />
        <TableContainer component={Paper}>
          <Table>
            <OrdersTableHead />
            <OrdersBodyTable currentOrders={data} />
          </Table>
        </TableContainer>
        <Box>
          <Rows />
        </Box>
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
