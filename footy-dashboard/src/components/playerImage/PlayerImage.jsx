import React from "react";
import "./styles.css";

const PlayerImage = ({ playerImg }) => {
  return (
    <div className="image-container">
      <img src={playerImg} />
    </div>
  );
};

export default PlayerImage;
