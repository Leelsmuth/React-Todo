// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.toDoItems.map(item => (
        <Todo key={item.id} taskData={item} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
};

export default TodoList;
