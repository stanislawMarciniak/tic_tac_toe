import React from "react";
import "./Scores.css";

const Scores = ({ score }) => {
  return (
    <div>
      X - {score.x} O - {score.o}
    </div>
  );
};

export default Scores;
