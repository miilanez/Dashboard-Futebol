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
          <div
            className="card-image"
            style={{ backgroundImage: `url(${data[1]?.Image})` }}
          >
            {/* Inside */}
          </div>
          <div className="card-content">
            <a rel="noopener noreferrer" href={data[1]?.NewsLink}>
              <h3 className="news-title">{data[1]?.Title}</h3>
            </a>
          </div>
        </div>

        <div className="card-news">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${data[2]?.Image})` }}
          >
            {/* Inside */}
          </div>
          <div className="card-content">
            <a rel="noopener noreferrer" href={data[2]?.NewsLink}>
              <h3 className="news-title">{data[2]?.Title}</h3>
            </a>
          </div>
        </div>

        {/* ))} */}
      </div>
    </div>
  );
};

export default News;
