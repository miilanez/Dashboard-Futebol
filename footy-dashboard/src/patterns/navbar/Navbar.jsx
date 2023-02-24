import { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div >
      <nav id="navbar">
        <ul>
          <li>
            <Link
              to="/"
              exact
              onClick={() => handleLinkClick("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              Principal
            </Link>
          </li>
          <li>
            <Link
              to="/premierleague"
              exact
              onClick={() => handleLinkClick("premierleague")}
              className={activeLink === "premierleague" ? "active" : ""}
            >
              Premier League
            </Link>
          </li>
          <li>
          <Link
              to="/seriea"
              exact
              onClick={() => handleLinkClick("seriea")}
              className={activeLink === "seriea" ? "active" : ""}
            >
              Serie A
            </Link>
          </li>
          <li>
          <Link
              to="/laliga"
              exact
              onClick={() => handleLinkClick("laliga")}
              className={activeLink === "laliga" ? "active" : ""}
            >
              La Liga
            </Link>
          </li>
          <li>
          <Link
              to="/bundesliga"
              exact
              onClick={() => handleLinkClick("bundesliga")}
              className={activeLink === "bundesliga" ? "active" : ""}
            >
              Bundesliga
            </Link>
          </li>
          <li>
          <Link
              to="/ligue1"
              exact
              onClick={() => handleLinkClick("ligue1")}
              className={activeLink === "ligue1" ? "active" : ""}
            >
              Ligue 1
            </Link>
          </li>
          <li>
          <Link
              to="/brasileirao"
              exact
              onClick={() => handleLinkClick("brasileirao")}
              className={activeLink === "brasileirao" ? "active" : ""}
            >
              Brasileirão
            </Link>
          </li>
        </ul>
      </nav>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
