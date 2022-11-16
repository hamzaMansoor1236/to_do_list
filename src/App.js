import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const mystyle = {
        
    
    padding: "15px",
    fontFamily: "Arial",
    
    

  };

  return (
    <div className="toDo" style={mystyle}>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
