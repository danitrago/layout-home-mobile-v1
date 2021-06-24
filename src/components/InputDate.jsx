import React from "react";
import StyledInput from "./StyledInput";

const InputDate = (props) => {
  return (
    <StyledInput width={props.width}>
      <i className={`fa fa-${props.icon}`}></i>
      <label>{props.label}</label>
      <input type="date" className="custom-input" />
    </StyledInput>
  );
};

export default InputDate;
