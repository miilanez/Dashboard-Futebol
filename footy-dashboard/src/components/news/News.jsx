import React from "react";
import OtherNews from "./OtherNews";
import "./styles.css";

const News = ({ data = [] }) => {
  const arr = [0, 1, 2, 3, 4];

  return (
    <div className="news-container">
      <div className="notices">
        {data &&
          arr.map((item, index) => (
            <OtherNews key={index} index={index} data={data} />
          ))}
      </div>
      News
    </div>
  );
};

export default News;
