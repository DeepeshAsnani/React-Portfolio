import React from "react";

function CardsSection({ iconName, title, details }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="icon">
          <img src={iconName} alt={iconName} />
          <h2>{title}</h2>
        </div>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default CardsSection;
