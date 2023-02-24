import React from "react";
import "./styles.css";

const PlayerImage = ({ playerImg, color }) => {
  return (
    <div className="image-container">
      <img src={playerImg} style={{backgroundColor:{color}}} />
    </div>
  );
};

export default PlayerImage;
