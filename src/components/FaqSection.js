import React from "react";

function FaqSection() {
  return (
    <div className="faq">
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
      </div>
    </div>
  );
}

export default FaqSection;
