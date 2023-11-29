import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import OrderDetailsButtons from "../OrderDetailsButtons";
import { Provider } from "react-redux";
import { store } from "../../../../../store/store";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("test Order Details editButton", () => {
  test("test Order Details editButton", async () => {
    const baseProps = {
      address: "string",
      contactNumber: "string",
      orderType: "string",
    };

    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderDetailsButtons formValues={baseProps} setFormValues={vi.fn()} />
        </BrowserRouter>
      </Provider>
    );

    const editButton = screen.getByTitle("Cancel");
    await user.click(editButton);
    expect(window.location.pathname).toBe("/orders");
  });
});
