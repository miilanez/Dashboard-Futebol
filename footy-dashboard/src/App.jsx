import "./App.css";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./patterns/navbar/Navbar";
import Footer from "./patterns/footer/Footer";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
