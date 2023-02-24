import React from "react";
import "./style.css";

const PageTitle = ({ title, logoLeague }) => {
  return (
    <div className="title" style={{ backgroundImage: { logoLeague } }}>
      <img src={logoLeague} />
      {title}
    </div>
  );
};

export default PageTitle;
