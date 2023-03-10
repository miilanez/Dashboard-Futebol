import "./styles.css";
import { useState } from "react";

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
        <div className="button" onClick={handleResults} value="1">
          Results
        </div>
        <div className="button" onClick={handleFixtures} value="2">
          Fixtures
        </div>
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
