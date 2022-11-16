import React from "react";

function Todo({ todos }) {

    const mystyle = {
        
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Arial",
        padding:"10px",
        borderRadius:"5px"

      };
  return todos.map((todo) => (
    <div>

      <h3 key={Math.floor(Math.random() * 10000)}  style={mystyle  }>{todo}</h3>
    </div>
  ));
}

export default Todo;
