import "./style.css";

import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

//imports components
import Standings from "../../components/standings/Standings";
import PageTitle from "../../components/pageTitle/PageTitle";

//imports api
import useStandings from "../../services/api/premierleague/useStandings";
import useTransfers from "../../services/api/premierleague/useTransfers";
import useNews from "../../services/api/premierleague/useNews";
import useFixtures from "../../services/api/premierleague/useFixtures";
import useResults from "../../services/api/premierleague/useResults";

const PremierLeague = () => {
  //Request Standings

  const [standing, setStanding] = useState([]);
  const { getStandings } = useStandings();

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

  const [transfers, setTransfer] = useState([]);
  const { getTransfers } = useTransfers();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getTransfers();
        setTransfer(dados);
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
  }, [getTransfers]);

  // console.log("tranferencias", transfers)

  //Request News

  const [news, setNews] = useState([]);
  const { getNews } = useNews();

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

  console.log("noticias", news);

  //Request Fixtures

  const [fixtures, setFixtures] = useState([]);
  const { getFixtures } = useFixtures();

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

  console.log("partidas", fixtures);

  //Request Results

  const [results, setResults] = useState([]);
  const { getResults } = useResults();

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

  console.log("resultados", results);

  //Request Squadname

  return (
    <div className="main-container">
      <PageTitle title="Premier League" />
      <div className="upper-container">
        <div>
          <Grid sx={{ backgroundColor: "blue" }}>Container</Grid>
        </div>
        <div>
          <Grid sx={{ backgroundColor: "red" }}>Container</Grid>
        </div>
        <div>
          <Grid sx={{ backgroundColor: "blue" }}>Container</Grid>
        </div>
      </div>

      <div className="downner-container">
        <Standings data={standing} title="Premier League" />
        <div>
          <Grid sx={{ backgroundColor: "green" }}>Container</Grid>
        </div>
      </div>
    </div>
  );
};

export default PremierLeague;
