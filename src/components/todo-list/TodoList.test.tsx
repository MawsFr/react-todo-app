import TodoList from "@/components/todo-list/TodoList";
import { render } from "vitest-browser-react";
import { TodoItemData } from "../todo-item/TodoItem";

describe(TodoList, () => {
  const toggleDone = vi.fn();

  beforeEach(() => {
    toggleDone.mockClear();
  });

  describe("Rendering", () => {
    it("should show a list of todos", () => {
      const todoList: TodoItemData[] = [
        {
          text: "Learn React",
        },
        {
          text: "Learn Typescript",
          done: false,
        },
        {
          text: "Practice DDD",
          done: true,
        },
      ];

      const { getByRole } = render(
        <TodoList todoList={todoList} toggleDone={toggleDone} />
      );

      todoList.forEach(async (todoItem) => {
        await expect
          .element(getByRole("listitem", { name: /todo-item/i }))
          .toHaveTextContent(todoItem.text);

        await expect
          .element(
            getByRole("checkbox", {
              name: /todo-item__done/i,
              checked: todoItem.done,
            })
          )
          .toBeInTheDocument();
      });
    });
  });

  describe("User should be able to", () => {
    it("click on a todo item to toggle it", async () => {
      const todoItem = { text: "Learn React", done: false };
      const { getByRole } = render(
        <TodoList todoList={[todoItem]} toggleDone={toggleDone} />
      );

      const todoItemCheckbox = getByRole("checkbox", {
        name: /todo-item__done/i,
      });

      await todoItemCheckbox.click();

      expect(toggleDone).toHaveBeenCalledWith(todoItem);
    });
  });
});
