import { render } from "vitest-browser-react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe(App, () => {
  it("should display a form to add a todo", async () => {
    const { getByRole } = render(<App />);

    await expect
      .element(getByRole("form", { name: /add-todo-form/i }))
      .toBeInTheDocument();

    await expect
      .element(getByRole("list", { name: /todo-list/i }))
      .toBeInTheDocument();
  });
});
