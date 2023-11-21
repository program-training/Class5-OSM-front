import Product from "./Product";

interface Order {
  _id: string;
  cartItems: Product[];
  orderTime: Date;
  status: string;
  price: number;
  shippingDetails: {
    address: string;
    userId: number;
    contactNumber: string;
    orderType: string;
  };
}

export default Order;
