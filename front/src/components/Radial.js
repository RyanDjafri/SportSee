import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const Radial = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./mock.json").then((res) => {
      setData(res.data.USER_PERFORMANCE[0]);
      console.log(res.data.USER_PERFORMANCE[0]);
    });
  }, []);
  return (
    <div className="radar-container">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Radial;
