import { useState } from "react";
import styled from "styled-components";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Please enter a todo item");
    } else {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled value={input} onChange={onChangeInput} />
      <ButtonStyled type="submit">+</ButtonStyled>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

const InputStyled = styled.input`
  width: 350px;
  height: 45px;
  margin-top: 10px;
  flex: 1;
  font-size: 1rem;
  margin-right: 10px;
  padding: 10px 20px;
  border: 1.8px solid #000;
  box-sizing: border-box;
  margin-bottom: 10px;
  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const ButtonStyled = styled.button`
  font-size: 3rem;
  border: none;
  background-color: #f9df9d;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 8px;
`;

export default AddTodo;
