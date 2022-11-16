import React from "react";

function Todo({ todos }) {

    const mystyle = {
        
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Arial",
        borderRadius:"5px"

      };
  return todos.map((element) => (
    <div>

      <h3 key={Math.floor(Math.random() * 10000)}  style={mystyle  }>{element}</h3>
    </div>
  ));
}

export default Todo;
