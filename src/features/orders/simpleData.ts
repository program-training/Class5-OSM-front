// דאתה ביס לדוגמה

import Order from "./types/Order";

export const simpleOrders: Order[] = [
  {
    _id: "651bc52a47a8559be535635f",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2h",
        name: "Tablet",
        description: "Compact tablet for on-the-go use",
        price: 399.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2i",
        name: "Stylus Pen",
        description: "Precision stylus pen for tablet",
        price: 19.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-01T14:00:00.000Z"),
    status: "pending",
    price: 419.98,
    shippingDetails: {
      address: "Self Pickup Location - Store A",
      userId: 6,
      contactNumber: "555-999-0000",
      orderType: "pickup",
    },
  },
  {
    _id: "651bc52a47a8559be535635g",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2k",
        name: "Smartwatch",
        description: "Fitness and health tracking smartwatch",
        price: 149.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2l",
        name: "Charging Dock",
        description: "Docking station for smartwatch",
        price: 29.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-02T09:30:00.000Z"),
    status: "pending",
    price: 179.98,
    shippingDetails: {
      address: "567 Birch St",
      userId: 7,
      contactNumber: "555-222-3333",
      orderType: "standard",
    },
  },
  {
    _id: "651bc52a47a8559be535635h",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2n",
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support",
        price: 499.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2o",
        name: "Wireless Headset",
        description: "Immersive wireless headset for gaming",
        price: 79.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-03T16:45:00.000Z"),
    status: "pending",
    price: 579.98,
    shippingDetails: {
      address: "789 Pine Avenue",
      userId: 9,
      contactNumber: "555-444-5555",
      orderType: "express",
    },
  },
  {
    _id: "651bc52a47a8559be535635i",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2q",
        name: "Camera Kit",
        description: "Professional camera with accessories",
        price: 799.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2r",
        name: "Tripod Stand",
        description: "Sturdy tripod stand for camera",
        price: 49.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-04T12:30:00.000Z"),
    status: "sent",
    price: 849.98,
    shippingDetails: {
      address: "456 Maple Street",
      userId: 10,
      contactNumber: "555-666-7777",
      orderType: "express",
    },
  },
  {
    _id: "651bc52a47a8559be535635h",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2n",
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support",
        price: 499.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2o",
        name: "Wireless Headset",
        description: "Immersive wireless headset for gaming",
        price: 79.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-03T16:45:00.000Z"),
    status: "pending",
    price: 579.98,
    shippingDetails: {
      address: "789 Pine Avenue",
      userId: 9,
      contactNumber: "555-444-5555",
      orderType: "express",
    },
  },
  {
    _id: "651bc52a47a8559be535635f",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2h",
        name: "Tablet",
        description: "Compact tablet for on-the-go use",
        price: 399.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2i",
        name: "Stylus Pen",
        description: "Precision stylus pen for tablet",
        price: 19.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-01T14:00:00.000Z"),
    status: "cancelled",
    price: 419.98,
    shippingDetails: {
      address: "Self Pickup Location - Store A",
      userId: 6,
      contactNumber: "555-999-0000",
      orderType: "pickup",
    },
  },
  {
    _id: "651bc52a47a8559be535635g",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2k",
        name: "Smartwatch",
        description: "Fitness and health tracking smartwatch",
        price: 149.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2l",
        name: "Charging Dock",
        description: "Docking station for smartwatch",
        price: 29.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-02T09:30:00.000Z"),
    status: "pending",
    price: 179.98,
    shippingDetails: {
      address: "567 Birch St",
      userId: 7,
      contactNumber: "555-222-3333",
      orderType: "standard",
    },
  },
  {
    _id: "651bc52a47a8559be535635h",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2n",
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support",
        price: 499.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2o",
        name: "Wireless Headset",
        description: "Immersive wireless headset for gaming",
        price: 79.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-03T16:45:00.000Z"),
    status: "received",
    price: 579.98,
    shippingDetails: {
      address: "789 Pine Avenue",
      userId: 9,
      contactNumber: "555-444-5555",
      orderType: "standard",
    },
  },
  {
    _id: "651bc52a47a8559be535635i",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2q",
        name: "Camera Kit",
        description: "Professional camera with accessories",
        price: 799.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2r",
        name: "Tripod Stand",
        description: "Sturdy tripod stand for camera",
        price: 49.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-04T12:30:00.000Z"),
    status: "sent",
    price: 849.98,
    shippingDetails: {
      address: "456 Maple Street",
      userId: 10,
      contactNumber: "555-666-7777",
      orderType: "standard",
    },
  },
  {
    _id: "651bc52a47a8559be535635h",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2n",
        name: "Gaming Console",
        description: "Next-gen gaming console with 4K support",
        price: 499.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2o",
        name: "Wireless Headset",
        description: "Immersive wireless headset for gaming",
        price: 79.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-03T16:45:00.000Z"),
    status: "pending",
    price: 579.98,
    shippingDetails: {
      address: "789 Pine Avenue",
      userId: 9,
      contactNumber: "555-444-5555",
      orderType: "express",
    },
  },
  {
    _id: "651bc52a47a8559be535635f",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2h",
        name: "Tablet",
        description: "Compact tablet for on-the-go use",
        price: 399.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2i",
        name: "Stylus Pen",
        description: "Precision stylus pen for tablet",
        price: 19.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-01T14:00:00.000Z"),
    status: "sent",
    price: 419.98,
    shippingDetails: {
      address: "Self Pickup Location - Store A",
      userId: 6,
      contactNumber: "555-999-0000",
      orderType: "pickup",
    },
  },
  {
    _id: "651bc52a47a8559be535635j",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2s",
        name: "Laptop",
        description: "Powerful laptop for work and gaming",
        price: 899.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2t",
        name: "Wireless Mouse",
        description: "Sleek wireless mouse for precise control",
        price: 29.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-05T18:15:00.000Z"),
    status: "processing",
    price: 929.98,
    shippingDetails: {
      address: "123 Oak Lane",
      userId: 11,
      contactNumber: "555-777-8888",
      orderType: "standard",
    },
  },
  {
    _id: "651bc52a47a8559be535635k",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2u",
        name: "Bluetooth Speaker",
        description: "High-quality portable Bluetooth speaker",
        price: 79.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2v",
        name: "Carrying Case",
        description: "Protective case for your electronics",
        price: 14.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-06T10:45:00.000Z"),
    status: "shipped",
    price: 94.98,
    shippingDetails: {
      address: "876 Cedar Street",
      userId: 12,
      contactNumber: "555-333-4444",
      orderType: "express",
    },
  },
  {
    _id: "651bc52a47a8559be535635l",
    cartItems: [
      {
        _id: "651d2efb4ab466ae93ba4f2w",
        name: "VR Headset",
        description: "Immersive virtual reality headset",
        price: 299.99,
        quantity: 1,
      },
      {
        _id: "651d2efb4ab466ae93ba4f2x",
        name: "Gaming Mouse",
        description: "Precision gaming mouse for competitive play",
        price: 49.99,
        quantity: 1,
      },
    ],
    orderTime: new Date("2023-11-07T15:30:00.000Z"),
    status: "completed",
    price: 349.98,
    shippingDetails: {
      address: "321 Pineapple Avenue",
      userId: 13,
      contactNumber: "555-666-9999",
      orderType: "standard",
    },
  },
];
