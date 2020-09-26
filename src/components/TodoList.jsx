import React from "react";
import Todo from "./Todo";

const TodoList = ({ toDos, handleUpdate }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            toDos={toDos}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
