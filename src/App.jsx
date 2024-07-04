import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  function handleAddTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(index) {
    const newTodosList = todos.filter((todo, todoIndex) => index !== todoIndex);
    setTodos(newTodosList);
  }

  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
