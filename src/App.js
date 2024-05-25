import { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RadioGroup from "./Radio";
import { ReactComponent as SearchIcon } from "./searchIcon.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { value: "React study", completed: false },
    { value: "Refactor Cabi project", completed: false },
    { value: "Study useRef, useMenu", completed: false },
  ]);
  const [radioState, setRadioState] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, { value: newTodo, completed: false }]);
  };

  const removeTodo = (removeIdx) => {
    setTodos(todos.filter((todo, index) => index !== removeIdx));
  };

  const toggleCompleted = (idx) => {
    setTodos(
      todos.map((todo, index) => {
        if (idx === index) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };

  const changeRadioState = (newState) => {
    setRadioState(newState);
  };

  const filteredTodos = todos.filter((todo) => {
    const lowerCaseValue = todo.value.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    if (radioState === "All" && lowerCaseValue.includes(lowerCaseSearchTerm))
      return true;
    if (
      radioState === "In Progress" &&
      !todo.completed &&
      lowerCaseValue.includes(lowerCaseSearchTerm)
    )
      return true;
    if (
      radioState === "Completed" &&
      todo.completed &&
      lowerCaseValue.includes(lowerCaseSearchTerm)
    )
      return true;
    return false;
  });

  return (
    <div className="App">
      <TodoWrapperStyled>
        <TitleStyled>Todo List</TitleStyled>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIconStyled />
        </SearchInputWrapper>
        <Separator />
        <RadioGroup
          changeRadioState={changeRadioState}
          selectedState={radioState}
        />
        <TodoListWrapper>
          <TodoList
            todos={filteredTodos}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        </TodoListWrapper>
        <Separator />
        <TitleStyled>Add</TitleStyled>
        <AddTodo addTodo={addTodo} />
      </TodoWrapperStyled>
    </div>
  );
}

const TodoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #c6a875;
  width: 500px;
  margin: auto;
  height: 700px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    border: 3px solid #490000;
    pointer-events: none;
  }
`;

const TitleStyled = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 5%;
  margin-bottom: -5px;
`;

const Separator = styled.hr`
  width: 90%;
  border: 0;
  margin-bottom: 20px;
  border-top: 2px solid #000;
`;

const SearchInputWrapper = styled.div`
  width: 85%;
  position: relative;
  margin: 20px 0 12px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: 1rem;
  font-family: "Petit Formal Script", cursive;
  font-weight: 600;
  font-style: normal;
  text-indent: 5px;
  padding: 10px 40px 10px 15px;
  border: 1.8px solid #000;
  box-sizing: border-box;
  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App;
