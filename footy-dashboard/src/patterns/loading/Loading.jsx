import React from "react";
import "./styles.css";

const Loading = () => {
  return (
    <div className="container-loading">
      <div className="box">
        <div className="shadow"></div>
        <div className="gravity">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
