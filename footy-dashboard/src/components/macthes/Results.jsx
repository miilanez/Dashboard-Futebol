import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Match from "./Match";

const Results = ({ data = [] }) => {
  //Captando o objeto que reune os dados da ultima rodada 
  let matchday = data[0] ? Object.values(data[0]).splice(0)?.[0] : [];

  return (
    <div className="container-results">
      <h2 className="results-title">Last Results</h2>
      <TableContainer component={Paper} sx={{ maxHeight: 349 }}>
        {matchday?.map((match) => (
          <Match data={match} />
        ))}
      </TableContainer>
    </div>
  );
};

export default Results;
