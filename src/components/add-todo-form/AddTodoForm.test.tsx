import { render } from "vitest-browser-react";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import { describe, it, expect, beforeEach } from "vitest";

describe(AddTodoForm, () => {
  const onAddTodo = vi.fn();

  beforeEach(() => {
    onAddTodo.mockClear();
  });

  it("should display correctly", async () => {
    const { getByRole } = render(<AddTodoForm onAddTodo={onAddTodo} />);
    const form = getByRole("form", { name: /add-todo-form/i });

    await expect.element(form).toBeInTheDocument();
    await expect
      .element(getByRole("textbox", { name: /add-todo-form__text/i }))
      .toBeInTheDocument();
    await expect
      .element(getByRole("button", { name: /add-todo-form__submit/i }))
      .toBeInTheDocument();
  });

  describe("User should be able to", () => {
    it("add a todo", async () => {
      const { getByRole } = render(<AddTodoForm onAddTodo={onAddTodo} />);
      const textbox = getByRole("textbox", { name: /add-todo-form__text/i });
      const submitButton = getByRole("button", {
        name: /add-todo-form__submit/i,
      });

      await textbox.fill("Learn React");
      await submitButton.click();

      expect(onAddTodo).toHaveBeenCalledWith("Learn React");
    });
  });
});
