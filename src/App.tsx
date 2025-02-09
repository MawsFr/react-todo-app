import { useEffect } from "react";
import "./App.css";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import { ThemeProvider, useTheme } from "./components/theme-provider";

function App() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AddTodoForm />
    </ThemeProvider>
  );
}

export default App;
