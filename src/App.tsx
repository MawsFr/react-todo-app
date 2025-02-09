import { ReactNode, useState } from 'react'
import './App.css'
import AddTodoForm from './AddTodoForm'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle';

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <AddTodoForm />
    </ThemeProvider>
  )
}

export default App
