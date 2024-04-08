const RadioGroup = ({ changeRadioState }) => {
  return (
    <>
      <input
        type="radio"
        name="radio"
        defaultChecked
        onChange={() => changeRadioState("All")}
      />
      <label>All</label>
      <input
        type="radio"
        name="radio"
        onChange={() => changeRadioState("In Progress")}
      />
      <label>In Progress</label>
      <input
        type="radio"
        name="radio"
        onChange={() => changeRadioState("Completed")}
      />
      <label>Completed</label>
    </>
  );
};

export default RadioGroup;
