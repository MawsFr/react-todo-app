import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type AddTodoFormProps = {
  onAddTodo: (text: string) => void;
};

export type AddTodoForm = {
  todoText: string;
};

const schema = z.object({
  todoText: z.string(),
});

export default function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const { register, handleSubmit } = useForm<AddTodoForm>({
    resolver: zodResolver(schema),
  });

  const addTodo = (fieldValues: AddTodoForm) => {
    onAddTodo(fieldValues.todoText);
  };

  return (
    <form aria-label="add-todo-form" onSubmit={handleSubmit(addTodo)}>
      <input
        {...register("todoText")}
        id="add-todo-form__text"
        aria-label="add-todo-form__text"
        type="text"
      />
      <label htmlFor="add-todo-form__text">Press Enter key to add a todo</label>
      <button aria-label="add-todo-form__submit" type="submit">
        Add
      </button>
    </form>
  );
}
