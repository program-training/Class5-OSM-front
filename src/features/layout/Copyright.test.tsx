import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Copyright } from "./Copyright";

describe("Copyright", () => {
  it("Check if returns element", () => {
    render(<Copyright />);
    const typography = screen.getByText("Team 1");
    expect(typography).toBeInTheDocument();
  });
});
