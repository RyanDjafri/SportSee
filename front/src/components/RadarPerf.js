import axios from "axios";
import React, { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

  const customizedPolarAngle = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text textAnchor="middle" fill="#fff">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div
      className="radar-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
        fontFamily: "Roboto", 
      }}
    >
      <RadarChart outerRadius={120} width={360} height={400} data={[data]}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={customizedPolarAngle} />
        <Radar
          name={`User ${data.userId}`}
          dataKey="value"
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
