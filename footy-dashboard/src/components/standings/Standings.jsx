import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const columns = [
  {
    field: "Position",
    align: "center",
    width: 10,
    headerName: "Pos",
    headerAlign: "center",
  },
  {
    field: "SquadLogo",
    render: (row) => (
      <img
        style={{ height: "22px", width: "22px", backgroundColor: "white" }}
        src={row.SquadLogo}
      ></img>
    ),
    align: "center",
    headerName: "",
    headerAlign: "center",
  },
  {
    field: "Name",
    align: "center",
    headerName: "Clubs",
    headerAlign: "center",
  },
  {
    field: "Points",
    align: "center",
    headerName: "Pts",
    headerAlign: "center",
    fontWeight: "600",
  },
  {
    field: "Played",
    align: "center",
    headerName: "Pl",
    headerAlign: "center",
  },
  {
    field: "Winned",
    align: "center",
    headerName: "W",
    headerAlign: "center",
  },
  {
    field: "Tie",
    align: "center",
    headerName: "T",
    headerAlign: "center",
  },
  {
    field: "Loosed",
    align: "center",
    headerName: "L",
    headerAlign: "center",
  },
  {
    field: "Goal Difference",
    align: "center",
    headerName: "GD",
    headerAlign: "center",
  },
];

export default function Standings({ data = [], title }) {
  return (
    <Paper sx={{ width: "100%", padding: "10px", borderRadius: "10px" }}>
      <h2 className="bckg-white">{title} Standings</h2>
      <TableContainer component={Paper} sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    backgroundColor: "white",
                    fontFamily: "Poppins",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ position: "relative", height: "400px", alignItems: "center" }}>
            {!!data.length ? (
              data?.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map(({ field, render }) => (
                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor: "white",
                        fontFamily: "Poppins",
                        fontSize: 15,
                        cursor: "pointer",
                      }}
                    >
                      {!!render ? render(row) : row?.[field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "12rem"
                  }}
                >
                  There is no data to display.
                </Box>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
