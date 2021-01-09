import React from "react";
//Import Images
import home1 from "../img/home1.png";

//Import Style
import { StyledAbout, StyleDescription, StyleImage, StyleHide } from "../style";
import {motion} from "framer-motion";
import {titleAnim,fade, PhotoAnime} from "../animation";
import Wave from "./Wave";

function AboutSection() {
  return (
    <StyledAbout>
      <StyleDescription>
        <motion.div className="title">
          <StyleHide>
            <motion.h2 variants={titleAnim} >We work to make</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnim} >
              your <span>dreams</span>
            </motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h2 variants={titleAnim} >come true.</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact Us for any Website or Web App idea. We have professional with
          amazing skilled people to work for your project.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyleDescription>
      <StyleImage>
        <motion.img variants={PhotoAnime} src={home1} alt="guy with a camera" />
      </StyleImage>
      <Wave/>
    </StyledAbout>
  );
}

export default AboutSection;
