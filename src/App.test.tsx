import { render, RenderResult } from "vitest-browser-react";
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

  describe("User should be able to", () => {
    const addTodo = async (text: string, app: RenderResult) => {
      const addTodoInput = app.getByRole("textbox", {
        name: /add-todo-form__text/i,
      });
      const addTodoButton = app.getByRole("button", {
        name: /add-todo-form__submit/i,
      });

      await addTodoInput.fill(text);
      await addTodoButton.click();
    };

    it("add a todo", async () => {
      const app = render(<App />);
      await addTodo("Learn React", app);

      await expect
        .element(app.getByText("Learn React").last())
        .toBeInTheDocument();
    });

    it("check a todo", async () => {
      const app = render(<App />);
      await addTodo("Learn React", app);
      const todoItemCheckbox = app.getByRole("checkbox", {
        name: /todo-item__done/i,
      });

      await todoItemCheckbox.click();

      await expect.element(todoItemCheckbox).toBeChecked();
    });
  });
});
