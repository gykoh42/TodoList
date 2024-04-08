import styled from "styled-components";

const TodoItem = ({ id, todo, toggleCompleted, removeTodo }) => {
  return (
    <TodoItemStyled>
      <button onClick={() => toggleCompleted(id)}>V</button>
      <TodoStyled $completed={todo.completed.toString()}>
        {todo.value}
      </TodoStyled>
      <button onClick={() => removeTodo(id)}>X</button>
    </TodoItemStyled>
  );
};

const TodoItemStyled = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const TodoStyled = styled.li`
  text-decoration: ${({ $completed }) =>
    $completed === "true" ? "line-through" : "none"};
`;

export default TodoItem;
