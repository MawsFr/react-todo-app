import "./App.css";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import TodoList from "./components/todo-list/TodoList";
import { useState } from "react";
import { TodoItemData } from "./components/todo-item/TodoItem";

function App() {
  const [todoList, setTodoList] = useState<TodoItemData[]>([]);

  const onAddTodo = (text: string) => {
    setTodoList([...todoList, { text }]);
  };

  const onToggleDone = (todoItem: TodoItemData) => {
    const index = todoList.indexOf(todoItem);
    const copiedTodoList = [...todoList];

    copiedTodoList[index].done = !copiedTodoList[index].done;

    setTodoList(copiedTodoList);
  };

  return (
    <>
      <AddTodoForm onAddTodo={onAddTodo} />
      <TodoList todoList={todoList} toggleDone={onToggleDone} />
    </>
  );
}

export default App;
