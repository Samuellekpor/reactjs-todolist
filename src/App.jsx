import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([
    "Go for a walk",
    "Eat more fruits and vegetables",
    "Pick up some flowers",
  ]);

  function handleAddTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos}/>
    </main>
  )
}

export default App
