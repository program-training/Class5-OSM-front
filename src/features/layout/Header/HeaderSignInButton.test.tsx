import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { expect, test } from "vitest";
import { store } from "../../../store/store";
import { userEvent } from "@testing-library/user-event";
import HeaderSignInButton from "./HeaderSignInButton";

test("Clicking on the HeaderSignInButton navigates to /signIn", () => {
  const user = userEvent.setup();

  render(
    <Provider store={store}>
      <MemoryRouter>
        <HeaderSignInButton />
      </MemoryRouter>
    </Provider>
  );

  //   console.log("Before click:", window.location.pathname);
  user.click(screen.getByText("Sign In"));
  const text = screen.getByText("Don't have an account? Sign Up");
  expect(text).toBeInTheDocument();
  //   console.log("After click:", window.location.pathname);
  // Click on the header to navigate to /home
  //   await user.click(SignInButton);
  // Check if the navigation occurred correctly

  //   expect(window.location.pathname).toBe("/signIn");
});
