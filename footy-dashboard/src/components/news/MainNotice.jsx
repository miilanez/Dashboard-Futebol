import React from "react";
import "./styles.css";

import Example from "../../assets/images/example.png";

const MainNotice = ({ data = [] }) => {
  return (
    <div className="main-news">
      <div className="main-news-container" style={{backgroundImage: `url(${data[0]?.Image})`}}>
        <div className="main-news-content">
          <a rel="noopener noreferrer" href={data[0]?.NewsLink}>
            <h3 className="main-news-title">{data[0]?.Title}</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainNotice;
