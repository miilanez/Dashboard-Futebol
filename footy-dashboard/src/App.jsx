import "./App.css";
import { Outlet } from "react-router-dom";

//components
import Navbar from "./patterns/navbar/Navbar";
import Footer from "./patterns/footer/Footer";

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
