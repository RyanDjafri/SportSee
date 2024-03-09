import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
import Activity from "./components/Activity";
import Time from "./components/Time";
import Diagram from "./components/Diagram";
import Score from "./components/Score";
import Nutrition from "./components/Nutrition";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <header>
        <h1 className="home-title">
          Bonjour, <span className="username">Thomas</span>
        </h1>
        <p className="welcome-p">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </header>
      <Activity />
      <div className="diagrams-container">
        {/* <Time />
        <Diagram />
        <Score />
        <Nutrition /> */}
      </div>
    </div>
  );
};

export default Home;
