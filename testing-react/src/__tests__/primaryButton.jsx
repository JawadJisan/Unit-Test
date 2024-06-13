import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrimaryButton from "../components/PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render correctly", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to Add");
    expect(element).toBeInTheDocument();
  });
  it("Should render correctly with the actionType if provided ", () => {
    const actionType = "Post";
    render(<PrimaryButton actionType={actionType} />);
    const element = screen.getByText(`Click to ${actionType}`);
    expect(element).toBeInTheDocument();
  });
});
