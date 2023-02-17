import "./App.css";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-app">
      <div>
        <Navbar />
        <div className="main-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
