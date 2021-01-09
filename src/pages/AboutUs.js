import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//motion from framer-motion
import {motion} from "framer-motion";
//function from animation
import {pageAnimation} from "../animation";
function AboutUs() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
