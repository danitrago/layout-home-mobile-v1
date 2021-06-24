import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";
import FlagImg from "../assets/flag.png";
import SideBarMenu from "./SideBarMenu";


const StyledTopBar = styled.div`
  background-color: white;
  border-bottom: 3px solid #00000010;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  .left,
  .right {
    display: flex;
    align-items: center;
    .logo {
      margin-left: 1.3rem;
      &__image {
        max-height: 30px;
      }
    }
  }
  .currency {
    color: ${(props) => props.theme.primary};
    margin-right: 1rem;
  }
  .flag {
    background-image: url("${FlagImg}");
    background-size: 100%;
    width: 20px;
    height: 20px;
    border-radius: 99px;
  }
`;

const TopBar = () => {
  return (
    <>
      <StyledTopBar>
        <div className="left">
          <div className="bars">
            <i className="fa fa-bars"></i>
          </div>
          <div className="logo">
            <img src={LogoImg} alt="Logo" className="logo__image" />
          </div>
        </div>
        <div className="right">
          <div className="currency">
            <i className="fa fa-dollar-sign"></i>
          </div>
          <div className="flag"></div>
        </div>
      </StyledTopBar>
      <SideBarMenu />
      
    </>
  );
};

export default TopBar;
