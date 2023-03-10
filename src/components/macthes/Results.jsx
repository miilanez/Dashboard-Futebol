import { Box, TableContainer, Paper } from "@mui/material";
import React from "react";
import Match from "./Match";

const Results = ({ data = [] }) => {
  //Captando o objeto que reune os dados da ultima rodada
  let matchday = data[0] ? Object.values(data[0]).splice(0)?.[0] : [];

  return (
    <div className="container-results">
      <h2 className="results-title">Last Results</h2>
      {!!matchday?.length ? (
        <TableContainer component={Paper} sx={{ maxHeight: 349 }}>
          {matchday?.map((match) => (
            <Match data={match} />
          ))}
        </TableContainer>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            There is no data to display.
          </Box>
        </>
      )}
    </div>
  );
};

export default Results;
