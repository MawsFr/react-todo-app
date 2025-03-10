import "./App.css";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import TodoList from "./components/todo-list/TodoList";
import { useTodoList } from "@/hooks/useTodoList.ts";

function App() {
  const {todoList, addTodo, toggleDone} = useTodoList()

  return (
    <>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} toggleDone={toggleDone} />
    </>
  );
}

export default App;
