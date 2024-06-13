import { render, screen, within, logRoles } from "@testing-library/react";
import UserTable from "./UsersTable";
import { users } from "../../App";
import { describe, expect, it } from "vitest";

describe("UserTable()", () => {
  it("Should render the table correctly", async () => {
    const { container } = render(<UserTable users={users} />);

    screen.logTestingPlaygroundURL();
    logRoles(container);

    const welcomeMessageElement = await screen.findByTestId(
      "welcome",
      {},
      {
        timeout: 2000,
      }
    );
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    expect(rows).toHaveLength(3);
    expect(welcomeMessageElement).toBeInTheDocument();
  });
});
