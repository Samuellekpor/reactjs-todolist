import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newTodos) {
    localStorage.setItem("todos", JSON.stringify({todos: newTodos}));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodosList = todos.filter((todo, todoIndex) => index !== todoIndex);
    persistData(newTodosList);
    setTodos(newTodosList);
  }

  //function to edit a todo
  function handleEditTodo(index) {
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    } 
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
      
  }, [])

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
