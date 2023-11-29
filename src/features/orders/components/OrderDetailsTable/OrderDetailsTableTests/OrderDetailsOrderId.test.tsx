import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OrderDetailsOrderId from "../OrderDetailsOrderId";
import { Provider } from "react-redux";
import { store } from "../../../../../store/store";
import { BrowserRouter } from "react-router-dom";

describe("Order Details Order Id", () => {
  it("displays order ID", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderDetailsOrderId />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Edit Order")).toBeInTheDocument();
  });
});
