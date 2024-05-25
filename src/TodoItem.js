import styled from "styled-components";
import { ReactComponent as CheckedCircle } from "./checkedCircle.svg";
import { ReactComponent as MinusCircle } from "./minusCircle.svg";

const TodoItem = ({ id, todo, toggleCompleted, removeTodo }) => {
  if (!todo) {
    return null;
  }

  return (
    <TodoItemStyled>
      <ActionButton onClick={() => toggleCompleted(id)}>
        <SVGStyled as={CheckedCircle} />
      </ActionButton>
      <TodoStyled $completed={todo.completed.toString()}>
        {todo.value}
      </TodoStyled>
      <DeleteButton onClick={() => removeTodo(id)}>
        <SVGStyled as={MinusCircle} />
      </DeleteButton>
    </TodoItemStyled>
  );
};

const TodoItemStyled = styled.div`
  font-family: "Petit Formal Script", cursive;
  font-weight: 400;
  font-style: normal;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: #ead7ab;
`;

const TodoStyled = styled.li`
  flex: 1;
  text-decoration: ${({ $completed }) =>
    $completed === "true" ? "line-through" : "none"};
  text-decoration-color: ${({ $completed }) =>
    $completed === "true" ? "#8b0000" : "inherit"};
  text-decoration-thickness: ${({ $completed }) =>
    $completed === "true" ? "2px" : "auto"};
  text-align: left;
  padding: 10px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  font-size: 1rem;
  font-weight: 700;
  list-style: none;
  margin: 0;
`;

const SVGStyled = styled.svg`
  width: 30px;
  height: 30px;
  stroke: currentColor;
`;

const ActionButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: transform 0.3s ease;

  &:hover {
    color: #8b0000;
    transform: scale(1.4);
  }

  &:focus {
    outline: none;
  }
`;

const DeleteButton = styled(ActionButton)`
  color: #000;

  &:hover {
    color: #8b0000;
  }
`;

export default TodoItem;
