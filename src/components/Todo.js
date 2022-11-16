import React from "react";

function Todo({ todos }) {



      const styleP= {
        
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Arial",
        fontWeight:"bold",
        borderRadius:"10px",
        fontSize:"20px",
        //dealing with overflow
        whiteSpace: "nowrap",
        overflow: "scroll",
      };

  return todos.map((element) => (
    <div>

      <p key={Math.floor(Math.random() * 10000)}  style={styleP  }>{element}</p>
    </div>
  ));
}

export default Todo;
