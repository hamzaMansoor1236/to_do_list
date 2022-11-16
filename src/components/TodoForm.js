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
    padding:"15px",
    backgroundColor:"#66FF99",
    borderRadius:"10px",
    fontFamily: "Arial",
    marginLeft:"1rem",
    fontWeight:"Bold",
    fontSize: "20px"

    
  }
  const inputStyle={
    padding:"15px",
    backgroundColor:"#66FF99",
    borderRadius:"10px",
    fontFamily: "Arial",
    fontWeight:"Bold",
    fontSize: "20px"
    
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
        style={inputStyle}
      ></input>
      <button className="todo-button" style={buttonStyle}>Add</button>
    </form>
  );
}

export default TodoForm;
