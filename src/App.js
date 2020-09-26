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
          filteredTodos: toDos.filter((todo) => todo.completed === true),
        });
        break;
      case "uncompleted":
        this.setState({
          filteredTodos: toDos.filter((todo) => todo.completed === false),
        });
        break;
      default:
        this.setState({ filteredTodos: toDos });
    }
  };

  componentDidMount() {
    if (localStorage.getItem("todos")) {
      this.setState({ toDos: JSON.parse(localStorage.getItem("todos")) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos !== this.state.toDos) {
      this.saveLocalTodos();
    }
    if (
      prevState.toDos !== this.state.toDos ||
      prevState.status !== this.state.status
    ) {
      this.filterHandler();
    }
  }

  saveLocalTodos = () => {
    const { toDos } = this.state;
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  render() {
    const { inputText, toDos, filteredTodos } = this.state;
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
        <TodoList
          toDos={toDos}
          filteredTodos={filteredTodos}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
