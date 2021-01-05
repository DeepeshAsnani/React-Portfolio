import React from "react";
// Import Card Component
import Card from "./CardsSection";

//Import Styled Componenets
import styled from "styled-components";

// Import Icons and Images
//Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
//Images
import home2 from "../img/home2.png";

//Import Style
import {
  StyledAbout as StyledServices,
  StyleDescription,
  StyleImage,
} from "../style";

// Main Function
function ServicesSection() {
  return (
    <NewStyledServices>
      <StyleDescription>
        <h2>
          High <span>quality</span> services
        </h2>

        <Card
          key={1}
          iconName={clock}
          title="Efficient"
          details="Lorem ipsum dolor sit amet."
        />
        <Card
          key={2}
          iconName={teamwork}
          title="TeamWork"
          details="Lorem ipsum dolor sit amet."
        />
        <Card
          key={3}
          iconName={diaphragm}
          title="Diaphragm"
          details="Lorem ipsum dolor sit amet."
        />
        <Card
          key={4}
          iconName={money}
          title="Affordable"
          details="Lorem ipsum dolor sit amet."
        />
      </StyleDescription>
      <StyleImage>
        <img src={home2} alt="camera Image" />
      </StyleImage>
    </NewStyledServices>
  );
}

const NewStyledServices = styled(StyledServices)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
export default ServicesSection;
