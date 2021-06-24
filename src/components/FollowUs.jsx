import React from "react";
import styled from "styled-components";

const StyledFollowUs = styled.div`
  padding: 2rem;
  span {
    font-size: 1.1rem;
  }
  ul {
    padding: 1.3rem 0;
    display: flex;
    li {
      font-size: 1.5rem;
      &:first-child {
        a {
          margin-left: 0;
        }
      }
      a {
        text-decoration: none;
        color: ${(props) => props.theme.primary};
        margin: 0 1rem;
      }
    }
  }
`;

const FollowUs = () => {
  return (
    <StyledFollowUs>
      <span>SÍGUENOS EN</span>
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </StyledFollowUs>
  );
};

export default FollowUs;
