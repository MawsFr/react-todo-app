import "./App.css";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import TodoList from "./components/todo-list/TodoList";

function App() {
  return (
    <>
      <AddTodoForm />
      <TodoList
        todoList={[
          {
            text: "Learn React",
          },
          {
            text: "Practice DDD",
          },
        ]}
      />
    </>
  );
}

export default App;
