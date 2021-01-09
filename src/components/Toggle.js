import { motion } from "framer-motion";
import React, { useState } from "react";

function Toggle({ children, title }) {
  const [faqToggle, SetFaqToggle] = useState(false);
  return (
    <motion.div
      layout
      className="question"
      onClick={() => SetFaqToggle(!faqToggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {faqToggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default Toggle;
