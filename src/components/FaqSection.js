import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection() {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {/* Question 1 */}
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              sunt.
            </p>
          </div>
        </Toggle>
        {/* Question 2 */}
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              sunt.
            </p>
          </div>
        </Toggle>
        {/* Question 3 */}
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              sunt.
            </p>
          </div>
        </Toggle>
        {/* Question 4 */}
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              sunt.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
