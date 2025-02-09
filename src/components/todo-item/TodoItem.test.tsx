import TodoItem from "@/components/todo-item/TodoItem";
import { render } from "vitest-browser-react";
import { expect, describe, it } from "vitest";

describe(TodoItem, () => {
  it("should display the todo text", async () => {
    const { getByText } = render(<TodoItem text="Learn React" />);

    await expect.element(getByText("Learn React")).toBeInTheDocument();
  });

  it("should not be done by default", async () => {
    const { getByRole } = render(<TodoItem text="Learn React" />);

    await expect
      .element(getByRole("checkbox", { name: /todo-item__done/i }))
      .not.toBeChecked();
  });

  it("should be switched to done", async () => {
    const { getByRole } = render(<TodoItem text="Learn React" done={true} />);

    await expect
      .element(getByRole("checkbox", { name: /todo-item__done/i }))
      .toBeChecked();
  });
});
