export type TodoItem = {
  text: string;
  done?: boolean;
};

export default function TodoItem({ text, done = false }: TodoItem) {
  return (
    <div role="todo-item">
      <input
        aria-label="todo-item__done"
        type="checkbox"
        defaultChecked={false}
        checked={done}
      />
      <div role="todo-item__text">{text}</div>
    </div>
  );
}
