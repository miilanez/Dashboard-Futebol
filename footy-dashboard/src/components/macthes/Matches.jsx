import React, { useState } from "react";
import Fixtures from "./Fixtures";
import Results from "./Results";
import "./styles.css";

const Matches = () => {
  const [value, setValue] = useState("1");

  const handleResults = () => {
    setValue("1");
  };

  const handleFixtures = () => {
    setValue("2");
  };

  return (
    <div value={value} className="matches-container">
      <div className="tab-buttons">
        <button onClick={handleResults} value="1">
          Results
        </button>
        <button onClick={handleFixtures} value="2">
          Fixtures
        </button>
      </div>
      <div className="renderized-area">
        {value === "1" ? (
          <Results />
        ) : value === "2" ? (
          <Fixtures />
        ) : (
          "Nada a Carregar"
        )}
      </div>
    </div>
  );
};

export default Matches;
