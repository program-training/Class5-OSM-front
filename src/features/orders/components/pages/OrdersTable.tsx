import { useEffect } from "react";
import { Table, TableContainer, Paper, Container, Box } from "@mui/material";
import SearchField from "../ordersTable/SearchField";
import { useAppSelector } from "../../../../store/hooks";
import OrdersTableHead from "../ordersTable/OrdersTableHead";
import OrdersBodyTable from "../ordersTable/OrdersBodyTable/OrdersBodyTable";
import useOrder from "../../hooks/useOrder";
import usePages from "../../hooks/usePages";
import { filterArrayOfObjects, sliceRowsPerPage } from "../../../utils/utils";
import useTerm from "../../hooks/useTerm";
import Rows from "../../../pages/Rows";

const OrdersTable = () => {
  const orders = useAppSelector((state) => state.orders.filteredOrders);
  const { page, rowsPerPage } = usePages();
  const { searchTerm } = useTerm();
  const { changeStatus, handleCancel, handleReceive } = useOrder(orders);
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
            <OrdersBodyTable
              currentOrders={data}
              handleCancel={handleCancel}
              handleReceive={handleReceive}
            />
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
