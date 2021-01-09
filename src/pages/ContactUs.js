import React from "react";
//motion from framer-motion
import {motion} from "framer-motion";
//function from animation
import {pageAnimation} from "../animation";
function ContactUs() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1>Contact Us</h1>
    </motion.div>
  );
}

export default ContactUs;
