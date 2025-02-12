import TodoItem from "@/components/todo-item/TodoItem";
import { render } from "vitest-browser-react";
import { expect, describe, it, beforeEach } from "vitest";

describe(TodoItem, () => {
  const toggleDone = vi.fn();

  beforeEach(() => {
    toggleDone.mockClear();
  });

  describe("Rendering", () => {
    it("should display the todo text", async () => {
      const { getByRole } = render(
        <TodoItem text="Learn React" toggleDone={toggleDone} />
      );

      await expect
        .element(getByRole("listitem"))
        .toHaveTextContent("Learn React");
    });
  });

  describe("Todo state", () => {
    it("should not be done by default", async () => {
      const { getByRole } = render(
        <TodoItem text="Learn React" toggleDone={toggleDone} />
      );

      await expect
        .element(getByRole("checkbox", { name: /todo-item__done/i }))
        .not.toBeChecked();
    });

    it("should be checked if done", async () => {
      const { getByRole } = render(
        <TodoItem text="Learn React" done={true} toggleDone={toggleDone} />
      );

      await expect
        .element(getByRole("checkbox", { name: /todo-item__done/i }))
        .toBeChecked();
    });
  });

  describe("User should be able to", () => {
    it("toggle a todo item", async () => {
      const { getByRole } = render(
        <TodoItem text="Learn React" toggleDone={toggleDone} />
      );

      const todoItemCheckbox = getByRole("checkbox", {
        name: /todo-item__done/i,
      });

      await todoItemCheckbox.click();

      expect(toggleDone).toHaveBeenCalled();
    });
  });
});
