import React, {useState, useEffect} from "react";
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm.js";


const App = () => {
  const [todos, setTodos] = useState([])

  useEffect( () => {
    const localTodos = localStorage.getItem("todos");
    console.log({localStorage})
    if (localTodos){
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo  => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("Its called")
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return(
    <Container fluid>
      <h1>Todo with Local Storage</h1>
      
      <TodoForm addTodos={addTodos}/>
      <Todos todos={todos} markComplete = {markComplete}/>
    </Container>
  )
}

export default App;