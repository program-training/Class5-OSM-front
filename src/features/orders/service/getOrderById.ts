import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apollo/apolloApi";
import { GET_ORDER_BY_ID } from "../graphQl/orderQueries";

const getOrderByID = createAsyncThunk("", async (orderId: string) => {
  try {
    const { data } = await client.query({
      query: GET_ORDER_BY_ID,
      variables: { getOrderByIdId: orderId },
    });
    return data.getOrderById;
  } catch (error) {
    return Promise.reject(error);
  }
});
export default getOrderByID;
