import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RadioGroup from "./Radio";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { value: "코딩하기", completed: false },
    { value: "밥먹기", completed: false },
    { value: "산책하기", completed: false },
  ]);
  const [radioState, setRadioState] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, { value: newTodo, completed: false }]);
  };

  const removeTodo = (removeIdx) => {
    setTodos(todos.filter((val, index) => index !== removeIdx));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo, index) => {
        if (id === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const changeRadioState = (newState) => {
    setRadioState(newState);
  };

  const filteredTodos = todos.filter((todo) => {
    // if (radioState === "All") return true;
    // if (radioState === "In Progress") return !todo.completed;
    // if (radioState === "Completed") return todo.completed;
    return todo.value.includes(searchTerm);
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      {/* <input
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <RadioGroup changeRadioState={changeRadioState} />
      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;
