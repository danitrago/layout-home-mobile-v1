import React from "react";
import styled from "styled-components";
import CarImg from "../assets/car.png";

const StyledAd = styled.div`
  border-radius: ${(props) => props.theme.border_radius};
  border: 1px solid #00000020;
  margin: 1rem;
  margin-top: 3rem;
  .ad {
    &__row {
      display: flex;
      align-items: center;
    }
    &__image,
    &__cta {
      width: 50%;
      padding: 1rem;
      &__focus {
        color: ${(props) => props.theme.primary};
      }
    }
    &__image {
      margin-right: -2rem;
      img {
        width: 100%;
      }
    }
    &__cta {
      font-weight: 600;
      font-size: 1.3rem;
      text-align: center;
    }
    &__slogan {
        padding: 1rem;
        padding-top: 0;
        text-align: center;
        font-size: .95rem;
        font-weight: 600;
    }
  }
`;

const Ads = () => {
  return (
    <StyledAd>
      <div className="ad">
        <div className="ad__row">
          <div className="ad__image">
            <img src={CarImg} alt="Car" />
          </div>
          <div className="ad__cta">
            ¡SEGURO DE VIAJE <span className="ad__cta__focus">GRATIS!</span>
          </div>
        </div>
        <div className="ad__slogan">Con cobertura médica frente al Coronavirus de <b>USD $100.000</b></div>
      </div>
    </StyledAd>
  );
};

export default Ads;
