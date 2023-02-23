import React from "react";
import "./styles.css";

import Example from "../../assets/images/example.png"

const MainNotice = ({ data = [] }) => {
  return (
    <div className="main-news">
      <div className="main-news-container">
        <a rel="noopener noreferrer" href={data[0]?.NewsLink}>
          {/* <img className="main-news-image" src={data[0]?.Image}  /> */}
          
        </a>
        <div className="main-news-content">
          {/* <h3 className="main-news-title">{data[0]?.Title}</h3> */}
          <h3 className="main-news-title">Noticia: Lorem Impsum dolor is amest for young trouble sir</h3>
        </div>
      </div>
    </div>
  );
};

export default MainNotice;
