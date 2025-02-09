import TodoItem from "@/components/todo-item/TodoItem";
import { render } from "vitest-browser-react";

describe(TodoItem, () => {
    it('should display the todo text', async () => {
        const {getByText} = render(<TodoItem text="Learn React"/>)

        await expect.element(getByText('Learn React')).toBeInTheDocument()
    })
})