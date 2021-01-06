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

function OurWork() {
  const Movie = MovieState();

  return (
    <StyleWork>
      <StyleMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to={Movie[0].url}>
          <img src={athlete} alt="athlete" />
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

const StyleWork = styled.div`
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
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export default OurWork;
