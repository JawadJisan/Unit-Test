import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";

// we can it or test
it("should render hello world correctly", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
