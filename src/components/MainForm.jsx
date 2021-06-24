import React from "react";
import styled from "styled-components";
import CardInput from "./CardInput";
import InputSwitch from "./InputSwitch";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";
import BoxImg from "../assets/box.svg";

const StyledForm = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1.5rem 1rem;
  position: relative;
  margin-bottom: 5rem;
  .main-title {
    text-align: center;
    color: white;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .switch-input {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    &__label {
      color: white;
      margin-left: 1rem;
      font-size: 0.8rem;
    }
  }
  .submit-btn {
    background-color: ${(props) => props.theme.primary};
    border: 5px solid white;
    border-radius: ${(props) => props.theme.border_radius_lg};
    padding: 1rem 1.8rem;
    color: white;
    font-size: 1.5rem;
    margin: 0 auto;
    display: block;
    box-shadow: 0 5px 5px #00000010;
    margin-bottom: -70px;
    position: relative;
    z-index: 1;
  }
  .bottom-box {
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
  }
`;

const cities = ["Bogotá", "Cartagena", "Medellín"];

const MainForm = () => {
  return (
    <StyledForm>
      <h1 className="main-title">ALQUILER DE AUTOS EN MIAMI</h1>
      <CardInput>
        <InputSelect label="Localidad de Retiro" options={cities} icon="truck" />
      </CardInput>
      <div className="switch-input">
        <InputSwitch />
        <span className="switch-input__label">
          lo quiero devolver en otro lugar
        </span>
      </div>
      <CardInput>
        <InputDate width={50} label="Recogida" icon="calendar" />
        <InputDate width={50} label="Devolución" icon="calendar" />
      </CardInput>
      <button className="submit-btn">
        <i className="fa fa-search"></i>
      </button>
      <img src={BoxImg} className="bottom-box" />
    </StyledForm>
  );
};

export default MainForm;
