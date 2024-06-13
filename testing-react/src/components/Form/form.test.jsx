import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import FormComponent from "./Form";
import { describe, expect, it, vi } from "vitest";

describe("FromComponent()", () => {
  it("submit the form correctly with user input", async () => {
    user.setup();

    const submitFn = vi.fn();

    render(<FormComponent onSubmit={submitFn} />);

    const text = "hello world";

    const inputEl = screen.getByRole("textbox");
    await user.type(inputEl, text);

    const headingEl = screen.getByRole("heading", {
      level: 2,
    });

    const submitBtn = screen.getByRole("button", {
      name: "submit",
    });
    await user.click(submitBtn);

    expect(headingEl).toHaveTextContent(text);
    expect(submitBtn).toHaveBeenCalled();
    expect(submitBtn).toHaveBeenCalledWith(text);
  });
});
