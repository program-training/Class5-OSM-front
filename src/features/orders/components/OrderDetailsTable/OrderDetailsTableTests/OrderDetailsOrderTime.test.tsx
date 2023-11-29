import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../../../../store/store";
import { BrowserRouter } from "react-router-dom";
import OrderDetailsOrderTime from "../OrderDetailsOrderTime";

describe("Order Details Order Id", () => {
  it("displays order ID", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderDetailsOrderTime />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText("Order Time")).toBeInTheDocument();
  });
});
