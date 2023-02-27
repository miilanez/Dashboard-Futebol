import "./style.css";
import "../mainStyles.css";

import { useState, useEffect } from "react";

import Lukaku from "../../assets/images/players/playerLukaku.png";
import SerieALogo from "../../assets/images/logos/serieA.png";

//imports components
import Standings from "../../components/standings/Standings";
import PageTitle from "../../components/pageTitle/PageTitle";
import MainNotice from "../../components/news/MainNotice";
import News from "../../components/news/News";
import Matches from "../../components/macthes/Matches";
import PlayerImage from "../../components/playerImage/PlayerImage";

//imports api
import useSerieA from "../../services/api/seriea/useSerieA";

const SerieA = () => {
  //Request Standings

  const [standing, setStanding] = useState([]);
  const { getStandings } = useSerieA();

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
  // const { getTransfers } = useSerieA();

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
  const { getNews } = useSerieA();

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
  // const { getSquadname } = useSerieA();

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
  const { getFixtures } = useSerieA();

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

  // console.log("fixtures", fixtures)

  //Request Results

  const [results, setResults] = useState([]);
  const { getResults } = useSerieA();

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
    <div className="page seriea">
      <div className="main-container">
        <div className="upper-container">
          <div>
            <PageTitle title="Serie A" logoLeague={SerieALogo} />
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
          <Standings data={standing} title="Serie A" />
        </div>
      </div>
    </div>
  );
};

export default SerieA;
