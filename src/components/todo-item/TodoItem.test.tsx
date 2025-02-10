import TodoItem from "@/components/todo-item/TodoItem";
import { render } from "vitest-browser-react";
import { expect, describe, it } from "vitest";

describe(TodoItem, () => {
  describe("Rendering", () => {
    it("should display the todo text", async () => {
      const { getByRole } = render(<TodoItem text="Learn React" />);

      await expect
        .element(getByRole("listitem"))
        .toHaveTextContent("Learn React");
    });
  });

  describe("Todo state", () => {
    it("should not be done by default", async () => {
      const { getByRole } = render(<TodoItem text="Learn React" />);

      await expect
        .element(getByRole("checkbox", { name: /todo-item__done/i }))
        .not.toBeChecked();
    });

    it("should be checked if done", async () => {
      const { getByRole } = render(<TodoItem text="Learn React" done={true} />);

      await expect
        .element(getByRole("checkbox", { name: /todo-item__done/i }))
        .toBeChecked();
    });
  });
});
