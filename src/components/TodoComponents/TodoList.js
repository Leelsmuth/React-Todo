// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-tasks">
      {props.toDoItems.map(item => (
        <Todo key={item.id} taskData={item} toggleTask={props.toggleTask} />
      ))}
      <button onClick={props.clearFinished}>Clear Purchased</button>
    </div>
  );
};

export default TodoList;
