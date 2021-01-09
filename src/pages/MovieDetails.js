import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieState from "../movieState";
import styled from "styled-components";

//motion from framer-motion
import { motion } from "framer-motion";
//function from animation
import { pageAnimation } from "../animation";
function MovieDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //Use Effect
  useEffect(() => {
    const currentmovie = movies.filter((moviestate) => moviestate.url === url);
    setMovie(currentmovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyleDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyleHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyleHeadline>
          <StyleAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyleAwards>
          <StyleImage>
            <img src={movie.secondaryImg} alt="movie" />
          </StyleImage>
        </StyleDetails>
      )}
    </>
  );
}
const StyleDetails = styled(motion.div)`
  color: white;
`;
const StyleHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;
const StyleAwards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyleAward = styled.div`
  padding: 5rem;

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const StyleImage = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
//Award Component
const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line">
        <p>{description}</p>
      </div>
    </StyleAward>
  );
};

export default MovieDetails;
