import Product from "./Product";

interface Order {
  _id: string;
  cartItems: Product[];
  orderTime: Date;
  status: string;
  Price: number;
  shippingDetails: {
    address: string;
    userId: number;
    contactNumber: string;
    orderType: string;
  };
}

export default Order;
