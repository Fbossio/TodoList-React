import React, { Component } from "react";

class Todo extends Component {
  deleteHandler = () => {
    const { toDos, todo, handleUpdate } = this.props;
    const newTodo = toDos.filter((el) => el.id !== todo.id);
    handleUpdate(newTodo);
  };

  completeHandler = () => {
    const { toDos, todo, handleUpdate } = this.props;
    const newTodo = toDos.map((item) => {
      if (item.id === todo.id) {
        let obj = { text: item.text, completed: !item.completed, id: item.id };
        return obj;
      }
      return item;
    });
    handleUpdate(newTodo);
  };

  render() {
    const { text, todo } = this.props;

    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={this.completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={this.deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Todo;
