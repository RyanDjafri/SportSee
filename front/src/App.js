import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
import Activity from "./components/Activity";
import Time from "./components/Time";
import Nutrition from "./components/Nutrition";
import Radiar from "./components/RadarPerf";
import Score from "./components/Score";

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
        <div className="first-part">
          <Activity />
          <Nutrition />
        </div>
        <div className="second-part">
          <Time />
          <Radiar />
          <Score />
        </div>
      </div>
    </div>
  );
};

export default Home;
