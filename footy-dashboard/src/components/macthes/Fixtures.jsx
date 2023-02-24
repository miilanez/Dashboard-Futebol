import React from "react";

//import components
import Paper from "@mui/material/Paper";
import { TableContainer } from "@mui/material";
import Match from "./Match";

const Fixtures = ({ data = [] }) => {
  //Captando o objeto que reune os dados da próxima rodada 
  let matchday = data[0] ? Object.values(data[0]).splice(0)?.[0] : [];

  return (
    <div className="container-results">
      <h2 className="results-title">Next Fixtures</h2>
      <TableContainer component={Paper} sx={{ maxHeight: 349 }}>
        {matchday?.map((match) => (
          <Match data={match} />
        ))}
      </TableContainer>
    </div>
  );
};

export default Fixtures