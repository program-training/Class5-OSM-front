import { expect, test } from "vitest";
interface CartItem {
  quantity: number;
}

function calculateTotal(items: CartItem[]) {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
}

const cartItems: CartItem[] = [
  { quantity: 1 },
  { quantity: 3 },
  { quantity: 2 },
];

let totalQuantity = calculateTotal(cartItems);

test("calculates total quantity", () => {
  expect(totalQuantity).toBe(6);
  cartItems.push({ quantity: 5 });
  totalQuantity = calculateTotal(cartItems);
  expect(totalQuantity).toBe(11);
});
