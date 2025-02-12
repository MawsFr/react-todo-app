export type TodoItemProps = TodoItemData & {
  toggleDone: () => void;
};

export type TodoItemData = {
  text: string;
  done?: boolean;
};

export default function TodoItem({
  text,
  done = false,
  toggleDone,
}: TodoItemProps) {
  return (
    <li aria-label="todo-item">
      <input
        aria-label="todo-item__done"
        id={text}
        type="checkbox"
        checked={done}
        onChange={toggleDone}
      />
      <label role="todo-item__text" htmlFor={text}>
        {text}
      </label>
    </li>
  );
}
