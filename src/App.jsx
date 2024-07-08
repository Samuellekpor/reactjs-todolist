import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(index) {
    const newTodosList = todos.filter((todo, todoIndex) => index !== todoIndex);
    setTodos(newTodosList);
  }

  function handleEditTodo(index) {
    const valueTObeEdited = todos[index];
    setTodoValue(valueTObeEdited);
    handleDeleteTodo(index);
  }

  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </main>
  );
}

export default App;
