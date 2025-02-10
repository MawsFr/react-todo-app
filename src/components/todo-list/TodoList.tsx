import TodoItem, { TodoItemProps } from "@/components/todo-item/TodoItem";

type TodoListProps = {
  todoList: TodoItemProps[];
};

export default function TodoList({ todoList: todos }: TodoListProps) {
  const renderTodoItem = (todoItem: TodoItemProps) => (
    <TodoItem key={todoItem.text} text={todoItem.text} />
  );

  const renderTodoItems = todos.map(renderTodoItem);

  return <ul aria-label="todo-list">{renderTodoItems}</ul>;
}
