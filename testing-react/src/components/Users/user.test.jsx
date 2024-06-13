import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Users from "./User";

it("should render the component", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", {
    name: "Name",
  });

  const element2 = screen.getByPlaceholderText("User name");
  const element3 = screen.getByText("Enter the form data");
  const element4 = screen.getByLabelText("Email");
  const element5 = screen.getByLabelText("Email", {
    selector: "input",
  });

  const element6 = screen.getByAltText("person");
  const element7 = screen.getByTitle("open");
  const element8 = screen.getByDisplayValue("jawad jisan");
  const element9 = screen.getByTestId("paragraph");
  const headingElement = screen.getByRole("heading", {
    level: 2,
  });
  const button = screen.queryByRole("button", {
    name: "submit",
  });

  expect(element).toBeInTheDocument();
  expect(element3).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(element4).toBeInTheDocument();
  expect(element5).toBeInTheDocument();
  expect(element6).toBeInTheDocument();
  expect(element7).toBeInTheDocument();
  expect(element8).toBeInTheDocument();
  expect(element9).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
  expect(button).not.toBeInTheDocument();
});
