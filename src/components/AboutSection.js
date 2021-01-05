import React from "react";
//Import Images
import home1 from "../img/home1.png";
//Import Styled Components
import styled from "styled-components";
function AboutSection() {
  return (
    <StyledAbout>
      <StyleDescription>
        <div className="title">
          <StyleHide>
            <h2>We work to make</h2>
          </StyleHide>
          <StyleHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>come true.</h2>
          </StyleHide>
        </div>
        <p>
          Contact Us for any Website or Web App idea. We have professional with
          amazing skilled people to work for your project.
        </p>
        <button>Contact Us</button>
      </StyleDescription>
      <StyleImage>
        <img src={home1} alt="guy with a camera" />
      </StyleImage>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyleDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const StyleImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
