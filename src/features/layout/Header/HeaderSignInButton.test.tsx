import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { expect, test } from "vitest";
import { store } from "../../../store/store";
import { userEvent } from "@testing-library/user-event";
import HeaderSignInButton from "./HeaderSignInButton";

test("Clicking on the HeaderSignInButton navigates to /signIn", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <Provider store={store}>
        <HeaderSignInButton />
      </Provider>
    </BrowserRouter>
  );

  await user.click(screen.getByText("Sign In"));
  expect(window.location.pathname).toBe("/signIn");
});
