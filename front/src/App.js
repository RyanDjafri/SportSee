import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";
import Activity from "./components/Activity";
import Time from "./components/Time";
import Nutrition from "./components/Nutrition";
import Radiar from "./components/RadarPerf";
import Score from "./components/Score";
import { useEffect, useState } from "react";
import ApiHook from "../src/components/apiHook";

const Home = () => {
  const [data, setData] = useState({ id: -1 });
  const { data: apiData, error } = ApiHook("mock.json");

  useEffect(() => {
    if (apiData) {
      setData(apiData.USER_MAIN_DATA[0]);
    }
  }, [apiData]);

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <Sidebar />
      <Navbar />
      <header>
        <h1 className="home-title">
          Bonjour{" "}
          <span className="username">
            {data.id !== -1 ? data.userInfos.firstName : "Loading"}
          </span>
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
