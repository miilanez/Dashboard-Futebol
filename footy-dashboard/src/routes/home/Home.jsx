import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

//image imports

import logoPremier from "../../assets/images/logos/premierLeague.png";
import logoSerieA from "../../assets/images/logos/serieA.png";
import logoLaLiga from "../../assets/images/logos/laLiga.png";
import logoLigue1 from "../../assets/images/logos/ligue1.png";
import logoBundesliga from "../../assets/images/logos/bundesliga.png";
import logoBrasileirao from "../../assets/images/logos/brasileirao.png";

const Home = () => {
  return (
    <div className="page home">
      <div className="main">
        <div className="content">
          <div className="content-left"></div>
          <div className="content-right">
            <div className="sobre">
              <h1>Futebol em tempo real</h1>
              <h3>
                Esta aplicação fornece dados dos principais campeonatos de
                futebol do planeta.
              </h3>
              <h3>
                Dados dos torneios, partidas jogadas, próxima rodada, notícias
                das ligas e mais.
              </h3>
              <h4>
                Todos os dados são retornados da Football API do Giuliano
                Crescimbeni.
              </h4>

              <div className="league-logos">
                <Link to="/premierleague" exact>
                  <img src={logoPremier} />
                </Link>
                <Link to="/seriea" exact>
                  <img src={logoSerieA} />
                </Link>
                <Link to="/laliga" exact>
                  <img src={logoLaLiga} />
                </Link>
                <Link to="/bundesliga" exact>
                  <img src={logoBundesliga} />
                </Link>
                <Link to="/ligue1" exact>
                  <img src={logoLigue1} />
                </Link>
                <Link to="/brasileirao" exact>
                  <img src={logoBrasileirao} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
