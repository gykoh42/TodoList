import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form>
      <input value={input} onChange={onChangeInput} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AddTodo;
