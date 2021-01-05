import React from "react";
import styled from "styled-components";
function CardsSection({ iconName, title, details }) {
  return (
    <StyleCards>
      <StyleCard>
        <div className="icon">
          <img src={iconName} alt={iconName} />
          <h3>{title}</h3>
        </div>
        <p>{details}</p>
      </StyleCard>
    </StyleCards>
  );
}

const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3  {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default CardsSection;
