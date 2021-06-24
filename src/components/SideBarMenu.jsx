import React from "react";
import LogoImg from "../assets/logo.png";
import FlagImg from "../assets/flag.png";
import styled from "styled-components";
import MenuOptions from "./MenuOptions";
import FollowUs from "./FollowUs";

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  width: 100vw;
  height: 100vh;
  .header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    .icon {
      color: ${(props) => props.theme.primary};
      font-size: 1.5rem;
    }
    .logo {
      &__image {
        max-height: 30px;
      }
    }
    .flag {
      background-image: url("${FlagImg}");
      background-size: 100%;
      width: 20px;
      height: 20px;
      border-radius: 99px;
    }
  }
`;

const options = [
  "Requisitos de Alquiler",
  "Preguntas Frecuentes",
  "Localidades",
  "Contáctanos",
];

const SideBarMenu = () => {
  return (
    <StyledSideBar>
      <div className="header">
        <div className="icon">
          <i className="fa fa-times"></i>
        </div>
        <div className="logo">
          <img src={LogoImg} alt="Logo" className="logo__image" />
        </div>
        <div className="flag"></div>
      </div>
      <MenuOptions options={options} />
      <FollowUs />
    </StyledSideBar>
  );
};

export default SideBarMenu;
