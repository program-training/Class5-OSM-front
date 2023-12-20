import { gql } from "@apollo/client";

export const ORDER_SUBSCRIPTION = gql`
  subscription OrderCreated {
    orderCreated {
      cartItems {
        productId
        name
        description
        price
        quantity
      }
      _id
      orderTime
      status
      price
      shippingDetails {
        address
        userId
        contactNumber
        orderType
      }
    }
  }
`;
