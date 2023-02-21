import React from "react";
import "./styles.css";

const OtherNews = ({ data = [], index }) => {
  return (
    <div>
      <div className="card-news">
        <a rel="noopener noreferrer" href="">
          <img src={{ data }[index]?.Image} className="main-image" />
        </a>
      </div>
    </div>
  );
};

export default OtherNews;
