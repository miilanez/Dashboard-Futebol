import "./style.css";

import { useState, useEffect } from "react";

import Haaland from "../../assets/images/premierleague/playerHaaland.png";

//imports components
import Standings from "../../components/standings/Standings";
import PageTitle from "../../components/pageTitle/PageTitle";
import MainNotice from "../../components/news/MainNotice";
import News from "../../components/news/News";
import Matches from "../../components/macthes/Matches";
import PlayerImage from "../../components/playerImage/PlayerImage";

//imports api
import usePremierLeague from "../../services/api/premierleague/usePremierLeague";


const PremierLeague = () => {
  //Request Standings

  const [standing, setStanding] = useState([]);
  const { getStandings } = usePremierLeague();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getStandings();
        setStanding(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }
  }, [getStandings]);

  //Request Transfers

  // const [transfers, setTransfer] = useState([]);
  // const { getTransfers } = usePremierLeague();

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const dados = await getTransfers();
  //       setTransfer(dados);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   function firstRequest() {
  //     fetch();
  //   }

  //   if (firstRequest) {
  //     firstRequest = false;
  //     fetch();
  //   }
  // }, [getTransfers]);

  // console.log("tranferencias", transfers)

  //Request News

  const [news, setNews] = useState([]);
  const { getNews } = usePremierLeague();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getNews();
        setNews(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }
  }, [getNews]);

  //Request Squadname
  // const [squadname, setSquadname] = useState([]);
  // const { getSquadname } = usePremierLeague();

  // useEffect(() => {
  //   async function fetch() {
  //     try {
  //       const dados = await getSquadname();
  //       setSquadname(dados);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   function firstRequest() {
  //     fetch();
  //   }

  //   if (firstRequest) {
  //     firstRequest = false;
  //     fetch();
  //   }
  // }, [getSquadname]);

  //Request Fixtures

  const [fixtures, setFixtures] = useState([]);
  const { getFixtures } = usePremierLeague();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getFixtures();
        setFixtures(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }
  }, [getFixtures]);

  //Request Results

  const [results, setResults] = useState([]);
  const { getResults } = usePremierLeague();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getResults();
        setResults(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }
  }, [getResults]);

  // console.log("resultados", results);

  return (
    <div className="main-container">
      <PageTitle title="Premier League" />
      <div className="upper-container">
        <div className="player-league-img">
          <PlayerImage playerImg={Haaland} />
        </div>
        <div>
          <MainNotice data={news} />
        </div>
        <div>
          <News data={news} />
        </div>
      </div>

      <div className="downner-container">
        <Matches results={results} fixtures={fixtures} />
        <Standings data={standing} title="Premier League" />
      </div>
    </div>
  );
};

export default PremierLeague;
