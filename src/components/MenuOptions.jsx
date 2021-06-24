import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  padding: 5rem 2rem;
  li {
    padding: 2rem 0;
    font-weight: 600;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: initial;
    }
  }
`;

const MenuOptions = (props) => {
  return (
    <StyledList>
      {props.options?.map((option) => (
        <li key={option}>
          <a href="#">{option}</a>
        </li>
      ))}
    </StyledList>
  );
};

export default MenuOptions;
