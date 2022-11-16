import React from "react";
import { useState } from "react";

// This component takes the input from the user 
// for eg  eat the meal
// for eg  Walk
// for eg  Arrange clothes

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    //preventing browser refresh
    e.preventDefault();
    //Dealing with empty('') input
    if (input === "") {
      return;
    }
    props.onSubmit(input);

    setInput("");
  };

  const buttonStyle={
    padding:"10px"
  }


  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        name="text"
        type={"text"}
        placeholder="Enter Task"
        value={input}
        onChange={handleChange}
        style={buttonStyle}
      ></input>
      <button className="todo-button" style={buttonStyle}>add</button>
    </form>
  );
}

export default TodoForm;
