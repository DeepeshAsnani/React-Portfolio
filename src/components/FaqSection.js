import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../style";

function FaqSection() {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {/* Question 1 */}
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            sunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question 2 */}
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            sunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question 3 */}
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            sunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question 4 */}
      <div className="question">
        <h4>What Products do you offer.</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            sunt.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
}

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;

    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
