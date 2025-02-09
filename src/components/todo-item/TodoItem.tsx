export type TodoItem = {
    text: string
}

export default function TodoItem({text}: TodoItem) {
    return (
        <div role="todo-item">
            <div role="todo-item__text">
                {text}
            </div>
        </div>
    )
}