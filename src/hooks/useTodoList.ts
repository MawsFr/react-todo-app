import { TodoItemData } from "@/components/todo-item/TodoItem.tsx";
import { useState } from "react";

export const useTodoList = () => {
    const [todoList, setTodoList] = useState<TodoItemData[]>([]);

    const addTodo = (text: string) => {
        setTodoList([...todoList, { text }]);
    };

    const toggleDone = (todoItem: TodoItemData) => {
        const index = todoList.indexOf(todoItem);
        const copiedTodoList = [...todoList];

        copiedTodoList[index].done = !copiedTodoList[index].done;

        setTodoList(copiedTodoList);
    };

    return { todoList, addTodo, toggleDone };
}