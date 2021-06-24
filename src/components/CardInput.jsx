import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.white};
  /* padding: 1rem; */
  margin-bottom: 1rem;
  border-radius: ${(props) => props.theme.border_radius};
  border: 3px solid #00000010;
  display: flex;
`;

const CardInput = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default CardInput;
