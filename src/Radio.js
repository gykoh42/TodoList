import styled from "styled-components";

const RadioGroup = ({ changeRadioState }) => {
  return (
    <RadioGroupStyled>
      <RadioLabel className="radio-label all">
        <RadioInput
          type="radio"
          name="radio"
          defaultChecked
          onChange={() => changeRadioState("All")}
        />
        <RadioLabelText>All</RadioLabelText>
      </RadioLabel>
      <RadioLabel className="radio-label in-progress">
        <RadioInput
          type="radio"
          name="radio"
          onChange={() => changeRadioState("In Progress")}
        />
        <RadioLabelText>In Progress</RadioLabelText>
      </RadioLabel>
      <RadioLabel className="radio-label completed">
        <RadioInput
          type="radio"
          name="radio"
          onChange={() => changeRadioState("Completed")}
        />
        <RadioLabelText>Completed</RadioLabelText>
      </RadioLabel>
    </RadioGroupStyled>
  );
};

const RadioGroupStyled = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  position: relative;
  font-size: 14px;
  font-weight: 800;
  border: 2px solid #000;
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  background-color: #fff;
  transition: background-color 0.3s ease;
  margin: 0 5px;
  width: auto;

  &:hover,
  &:focus-within {
    background-color: #8b0000;
    color: white;
  }
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked {
    & + span {
      background-color: transparent;
    }
    & ~ .radio-label {
      background-color: #8b0000;
      color: white;
    }
  }
`;

const RadioLabelText = styled.span`
  display: block;
`;

export default RadioGroup;
