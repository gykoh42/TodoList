import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleCompleted }) => {
  return (
    <TodoListStyled>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          id={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </TodoListStyled>
  );
};

const TodoListStyled = styled.ul`
  width: 100%;
  list-style: none;
  margin-bottom: 30px;
`;

export default TodoList;
