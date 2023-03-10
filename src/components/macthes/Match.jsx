import React from "react";

const Match = ({ data = [] }) => {
  return (
    <div className="match-container">
      <div className="match">
        <div className="teamLogo">
          <img src={data.homeLogo} />
        </div>
        <div className="teamName">{data.homeTeam}</div>
        <div className="score">
          {data.homeTeamScore} <h3>-</h3> {data.awayTeamScore}
        </div>
        <div className="teamName">{data.awayTeam}</div>
        <div className="teamLogo">
          <img src={data.awayLogo} />
        </div>
        <div className="matchday-date">{data.MatchDay}</div>
      </div>
    </div>
  );
};

export default Match;
