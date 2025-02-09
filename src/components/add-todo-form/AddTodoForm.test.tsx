import { render } from "vitest-browser-react";
import AddTodoForm from "@/components/add-todo-form/AddTodoForm";
import { describe, it, expect} from 'vitest'

describe(AddTodoForm, () => {
    it('should display correctly', async () => {
        const { getByRole } = render(<AddTodoForm></AddTodoForm>)
        const form =  getByRole('form', {name: /add-todo-form/i})

        await expect.element(form).toBeInTheDocument()
        await expect.element(getByRole('textbox', {name: /add-todo-form__input/i})).toBeInTheDocument()
        await expect.element(getByRole('button', {name: /add-todo-form__submit/i})).toBeInTheDocument()
    })
})