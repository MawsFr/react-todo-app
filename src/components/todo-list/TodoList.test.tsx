import TodoList from "@/components/todo-list/TodoList";
import { render } from "vitest-browser-react";
import { TodoItemProps } from "../todo-item/TodoItem";

describe(TodoList, () => {
  describe("Rendering", () => {
    it("should show a list of todos", () => {
      const todoList: TodoItemProps[] = [
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

      const { getByRole } = render(<TodoList todoList={todoList} />);

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
});
