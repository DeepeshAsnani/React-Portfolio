import React from "react";
//Import Styled Component
import styled from "styled-components";
//Import Link from router dom
import { Link } from "react-router-dom";
//Import images from img folder
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import MovieState from "../movieState";

//motion from framer-motion
import { motion } from "framer-motion";
//function from animation
import {
  pageAnimation,
  fade,
  PhotoAnime,
  LineAnim,
  slider,
} from "../animation";

function OurWork() {
  const Movie = MovieState();

  return (
    <StyleWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyleFrame1 variants={slider}></StyleFrame1>
      <StyleFrame2 variants={slider}></StyleFrame2>
      <StyleFrame3 variants={slider}></StyleFrame3>
      <StyleFrame4 variants={slider}></StyleFrame4>

      <StyleMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to={Movie[0].url}>
          <StyleHide>
            <motion.img variants={PhotoAnime} src={athlete} alt="athlete" />
          </StyleHide>
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to={Movie[2].url}>
          <img src={theracer} alttheracer="theracer" />
        </Link>
      </StyleMovie>
      <StyleMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to={Movie[1].url}>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyleMovie>
    </StyleWork>
  );
}

const StyleWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyleMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const StyleHide = styled.div`
  overflow: hidden;
`;
const StyleFrame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
`;
const StyleFrame2 = styled(StyleFrame1)`
  background: #ff8efb;
`;
const StyleFrame3 = styled(StyleFrame1)`
  background: #8ed2ff;
`;
const StyleFrame4 = styled(StyleFrame1)`
  background: #8effa0;
`;
export default OurWork;
