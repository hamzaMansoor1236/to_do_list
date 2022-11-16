import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  var [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    settodos(newTodos);

  };

  

 

  return (
    <div >
        <h1 style={{color:"white"}}>To do List </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;
