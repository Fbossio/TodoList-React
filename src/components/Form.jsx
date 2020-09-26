import React, { Component } from "react";

class Form extends Component {
  statusHandler = (e) => {
    const { handleStatus } = this.props;
    const stat = e.target.value;
    handleStatus(stat);
  };

  render() {
    const { inputTextHandler, submitTodoHandler, inputText } = this.props;
    return (
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            onChange={this.statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
