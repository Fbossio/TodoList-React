import React, { Component } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  state = {
    inputText: "",
    toDos: [],
    status: "all",
    filteredTodos: [],
  };

  setInputText = (e) => {
    let inputText = "";
    inputText += e.target.value;
    this.setState({ inputText });
  };

  submitTodoHandler = (e) => {
    const { inputText, toDos } = this.state;
    e.preventDefault();
    let newTodos = [
      ...toDos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ];

    this.setState({ inputText: "", toDos: newTodos });
  };

  handleUpdate = (arr) => {
    this.setState({ toDos: arr });
  };

  handleStatus = (stat) => {
    this.setState({ status: stat });
  };

  filterHandler = () => {
    const { status, toDos } = this.state;
    switch (status) {
      case "completed":
        this.setState({
          status: toDos.filter((todo) => todo.completed === true),
        });
        break;
      case "uncompleted":
        this.setState({
          status: toDos.filter((todo) => todo.completed === false),
        });
        break;
      default:
        this.setState({ status: toDos });
    }
  };

  render() {
    const { inputText, toDos } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Felix's To Do List </h1>
        </header>
        <Form
          inputText={inputText}
          inputTextHandler={this.setInputText}
          submitTodoHandler={this.submitTodoHandler}
          handleStatus={this.handleStatus}
        />
        <TodoList toDos={toDos} handleUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
