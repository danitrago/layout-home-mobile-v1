import React from "react";
import styled from "styled-components";

const StyledReviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  i {
    color: ${(props) => props.theme.green};
  }
  .brand {
      font-weight: 800;
  }
  .points {
      display: flex;
      margin-left: 1rem;
      border-left: 1px solid #00000040;
      padding-left: 1rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      &__number {
          margin-right: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
      }
  }
`;

const Reviews = () => {
  return (
    <StyledReviews>
      <div className="brand">
        <i className="fa fa-star"></i> Trustpilot
      </div>
      <div className="points">
        <div className="points__number">4.7/5</div>
        <div className="points__stars">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
        </div>
      </div>
    </StyledReviews>
  );
};

export default Reviews;
