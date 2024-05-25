import React from "react";
import styled from "styled-components";

const RadioGroup = ({ changeRadioState, selectedState }) => {
  const handleRadioChange = (state) => {
    if (selectedState !== state) {
      changeRadioState(state);
    }
  };

  return (
    <RadioGroupStyled>
      {["All", "In Progress", "Completed"].map((state) => (
        <RadioLabel
          key={state}
          selected={selectedState === state}
          onClick={() => handleRadioChange(state)}
        >
          <RadioInput
            type="radio"
            name="radio"
            checked={selectedState === state}
            onChange={() => {}}
            readOnly
          />
          {state}
        </RadioLabel>
      ))}
    </RadioGroupStyled>
  );
};

const RadioGroupStyled = styled.div`
  font-family: "Petit Formal Script", cursive;
  font-weight: 400;
  font-style: normal;
  display: flex;
  margin-top: 15px;
  margin-bottom: 8px;
`;

const RadioLabel = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 800;
  border: 2px solid #000;
  display: block;
  cursor: pointer;
  padding: 5px 14px;
  background-color: ${({ selected }) => (selected ? "#8b0000" : "#fff")};
  color: ${({ selected }) => (selected ? "white" : "black")};
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
`;

export default RadioGroup;
