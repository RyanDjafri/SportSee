import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
import Activity from "./components/Activity";
import Time from "./components/Time";
import Score from "./components/Score";
import Nutrition from "./components/Nutrition";
import Radial from "./components/Radial";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <header>
        <h1 className="home-title">
          Bonjour <span className="username">Thomas</span>
        </h1>
        <p className="welcome-p">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </header>
      <div className="charts-container">
        <Activity />
        <Time />
        <Nutrition />
        <Radial />
        {/* <Score />  */}
      </div>
    </div>
  );
};

export default Home;
