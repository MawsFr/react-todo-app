export type TodoItemProps = {
  text: string;
  done?: boolean;
};

export default function TodoItem({ text, done = false }: TodoItemProps) {
  return (
    <li aria-label="todo-item">
      <input
        aria-label="todo-item__done"
        id={text}
        type="checkbox"
        defaultChecked={false}
        checked={done}
      />
      <label role="todo-item__text" htmlFor={text}>
        {text}
      </label>
    </li>
  );
}
