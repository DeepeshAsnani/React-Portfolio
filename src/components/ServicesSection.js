import React from "react";
// Import Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
//Import Images
import home2 from "../img/home2.png";
// Import Card Component
import Card from "./CardsSection";
function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
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
      </div>
      <div className="image">
        <img src={home2} alt="camera Image" />
      </div>
    </div>
  );
}

export default ServicesSection;
