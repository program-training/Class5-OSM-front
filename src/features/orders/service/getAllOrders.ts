import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/apolloApi";
import { GET_ORDERS } from "../graphQl/orderQueries";

const getAllOrders = createAsyncThunk("ordersSlice/getAllOrders", async () => {
  try {
    const { data } = await client.query({ query: GET_ORDERS });
    return data.getAllOrdersFromMongoDB;
  } catch (error) {
    return Promise.reject(error);
  }
});

export default getAllOrders;
