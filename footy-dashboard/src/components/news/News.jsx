import React from "react";
import "./styles.css";

const News = ({ data = [] }) => {
  const notices = [1, 2];

  return (
    <div className="news-container">
      <div className="notices">
        {/* {data &&
          notices.map((index) => ( */}
        <div className="card-news">
          <div className="card-image">
            <a rel="noopener noreferrer" href={data[1]?.NewsLink}>
              {/* <img className="main-news-image" src={data[0]?.Image}  /> */}
            </a>
          </div>
          <div className="card-content">
            <h2 className="news-title">Card News</h2>
            <button className="read-news-button">Leia Mais</button>
          </div>
        </div>
        <div className="card-news">
          <div className="card-image">
            <a rel="noopener noreferrer" href={data[2]?.NewsLink}>
              {/* <img className="main-news-image" src={data[0]?.Image}  /> */}
            </a>
          </div>
          <div className="card-content">
            <h2 className="news-title">Card News</h2>
          </div>
        </div>

        {/* ))} */}
      </div>
    </div>
  );
};

export default News;
