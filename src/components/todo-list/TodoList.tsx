import TodoItem, { TodoItemData } from "@/components/todo-item/TodoItem";

export type TodoListProps = {
  todoList: TodoItemData[];
  toggleDone: (todoItem: TodoItemData) => void;
};

export default function TodoList({ todoList, toggleDone }: TodoListProps) {
  const onToggleDone = (todoItem: TodoItemData) => {
    toggleDone(todoItem);
  };

  const renderTodoItem = (todoItem: TodoItemData) => (
    <TodoItem
      key={todoItem.text}
      text={todoItem.text}
      done={todoItem.done}
      toggleDone={() => onToggleDone(todoItem)}
    />
  );

  const renderTodoItems = todoList.map(renderTodoItem);

  return <ul aria-label="todo-list">{renderTodoItems}</ul>;
}
