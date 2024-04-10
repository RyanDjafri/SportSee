import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import ApiHook from "./apiHook";

const RadarPerf = () => {
  const { data, error } = ApiHook("./mock.json");

  if (error) {
    return <div>data indisponible</div>;
  }

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
      <RadarChart
        outerRadius={120}
        width={360}
        height={400}
        data={[data.USER_PERFORMANCE[0]]}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={customizedPolarAngle} />
        <Radar
          name={`User ${data.USER_PERFORMANCE[0].userId}`}
          dataKey="value"
          fill="rgba(255, 1, 1, 0.70)"
          fillOpacity={0.6}
          data={data.USER_PERFORMANCE[0].data.map((entry) => ({
            kind: data.USER_PERFORMANCE[0].kind[entry.kind.toString()],
            value: entry.value,
          }))}
        />
      </RadarChart>
    </div>
  );
};

export default RadarPerf;
