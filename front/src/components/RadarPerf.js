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

const RadarPerf = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("./mock.json").then((res) => {
      setData(res.data.USER_PERFORMANCE[0]);
    });
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <div className="radar-container">
      <RadarChart outerRadius={90} width={730} height={250} data={[data]}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar
          name={`User ${data.userId}`}
          dataKey="value"
          stroke="#8884d8"
          fill="rgba(255, 1, 1, 0.70)"
          fillOpacity={0.6}
          data={data.data.map((entry) => ({
            kind: data.kind[entry.kind.toString()],
            value: entry.value,
          }))}
        />
      </RadarChart>
    </div>
  );
};

export default RadarPerf;
