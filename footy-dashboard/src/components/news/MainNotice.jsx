import React from "react";
import "./styles.css";

const MainNotice = ({ data = [] }) => {
  return (
    <div className="main-notice">
      <div>
        <a rel="noopener noreferrer" href="">
          <img src={{ data }[0]?.Image} className="main-image" />
        </a>
      </div>
      Main Notice
    </div>
  );
};

export default MainNotice;
