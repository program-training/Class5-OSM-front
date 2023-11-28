import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import { expect, test } from "vitest";
import { store } from "../../../store/store";
import { userEvent } from "@testing-library/user-event";

test("Header renders correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  // Check if the header text is rendered
  const headerText = screen.getByTitle(/Team 1 OMS/i);
  expect(headerText).toBeInTheDocument();
});

test("Clicking on the header navigates to /home", async () => {
  const user = userEvent.setup();

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  const headerButton = screen.getByText(/Team 1 OMS/i);
  //   console.log("Before click:", window.location.pathname);
  //   await user.click(headerButton);
  //   console.log("After click:", window.location.pathname);
  // Click on the header to navigate to /home
  await user.click(headerButton);
  // Check if the navigation occurred correctly
  expect(window.location.pathname).toBe("/");
});
