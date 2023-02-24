import "./styles.css";
import { useState, useEffect } from "react";

//import components
import Fixtures from "./Fixtures";
import Results from "./Results";

const Matches = ({ results = [], fixtures = [] }) => {

  // state da Rednerização Condicional

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
          <h3>Results</h3>
        </button>
        <button onClick={handleFixtures} value="2">
          <h3>Fixtures</h3>
        </button>
      </div>
      <div className="renderized-area">
        {value === "1" ? (
          <Results data={results} />
        ) : value === "2" ? (
          <Fixtures data={fixtures} />
        ) : (
          "Nada a Carregar"
        )}
      </div>
    </div>
  );
};

export default Matches;
