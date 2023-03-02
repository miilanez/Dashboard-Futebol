import "./style.css";
import "../mainStyles.css";

import { useState, useEffect } from "react";

import laLigaLogo from "../../assets/images/logos/laLiga.png";

//imports components
import Standings from "../../components/standings/Standings";
import PageTitle from "../../components/pageTitle/PageTitle";
import MainNotice from "../../components/news/MainNotice";
import News from "../../components/news/News";
import Matches from "../../components/macthes/Matches";

//imports api
import useLaLiga from "../../services/api/laliga/useLaLiga";
import Loading from "../../patterns/loading/Loading";

const LaLiga = () => {
  //Tempo de Requisição
  const timeRefresh = 6000000;

  //loading
  const [loading, setLoading] = useState(false);

  //Request Standings

  const [standing, setStanding] = useState([]);
  const { getStandings } = useLaLiga();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const dados = await getStandings();
        setStanding(dados);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }

    const interval = setInterval(fetch, timeRefresh); //60s
    return () => clearInterval(interval);
  }, [getStandings]);

  //Request Transfers

  // const [transfers, setTransfer] = useState([]);
  // const { getTransfers } = useLaLiga();

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
  const { getNews } = useLaLiga();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const dados = await getNews();
        setNews(dados);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }

    const interval = setInterval(fetch, timeRefresh); //60s
    return () => clearInterval(interval);
  }, [getNews]);

  //Request Squadname
  // const [squadname, setSquadname] = useState([]);
  // const { getSquadname } = useLaLiga();

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
  const { getFixtures } = useLaLiga();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const dados = await getFixtures();
        setFixtures(dados);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }

    const interval = setInterval(fetch, timeRefresh); //60s
    return () => clearInterval(interval);
  }, [getFixtures]);

  // console.log("fixtures", fixtures)

  //Request Results

  const [results, setResults] = useState([]);
  const { getResults } = useLaLiga();

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      try {
        const dados = await getResults();
        setResults(dados);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      firstRequest = false;
      fetch();
    }

    const interval = setInterval(fetch, timeRefresh); //60s
    return () => clearInterval(interval);
  }, [getResults]);

  // console.log("resultados", results);

  return (
    <div className="page laliga">
      {loading ? (
        <Loading />
      ) : (
        <div className="main-container">
          <div className="upper-container">
            <div>
              <PageTitle
                title="La Liga"
                logoLeague={laLigaLogo}
              />
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
            <Standings data={standing} title="La Liga" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LaLiga;
