import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { describe, expect, it } from "vitest";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
  it("Check if returns element", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    const timeElement = screen.getByText(/Local Time:/i);

    expect(timeElement).toBeInTheDocument();
  });
});
