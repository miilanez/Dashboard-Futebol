import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//páginas
import Home from "./routes/home/Home";
import PremierLeague from "./routes/premierleague/PremierLeague";
import SerieA from "./routes/seriea/SerieA";
import LaLiga from "./routes/laliga/LaLiga";
import Bundesliga from "./routes/bundesliga/Bundesliga";
import Ligue1 from "./routes/ligue1/Ligue1";
import Brasileirao from "./routes/brasileirao/Brasileirao";

import { RouterProvider, Route, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/premierleague",
        element: <PremierLeague />,
      },
      {
        path: "/seriea",
        element: <SerieA />,
      },
      {
        path: "/laliga",
        element: <LaLiga />,
      },
      {
        path: "/bundesliga",
        element: <Bundesliga />,
      },
      {
        path: "/ligue1",
        element: <Ligue1 />,
      },
      {
        path: "/brasileirao",
        element: <Brasileirao />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
