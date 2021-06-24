import React from "react";
import StyledInput from "./StyledInput";

const InputSelect = (props) => {
  return (
    <StyledInput>
      <i className={`fa fa-${props.icon}`}></i>
      <label>{props.label}</label>
      <select className="custom-input">
        <option value="">Ciudad, Aeropuerto o Ciudad</option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </StyledInput>
  );
};

export default InputSelect;
