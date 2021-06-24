// import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.width || 100}%;
  /* width: 50%; */
  /* float: left; */
  box-sizing: border-box;
  i {
    position: absolute;
    left: 1rem;
    top: 1.7rem;
    color: ${(props) => props.theme.primary};
    font-size: 1.3rem;
    pointer-events: none;
  }
  label {
    position: absolute;
    top: 1rem;
    left: 3.6rem;
    font-size: 0.85rem;
    pointer-events: none;
  }
  .custom-input {
    padding: 1rem;
    padding-top: 2.3rem;
    padding-left: 3.3rem;
    font-weight: 700;
    font-size: 1rem;
    border: none;
  }
`;

export default StyledInput;
