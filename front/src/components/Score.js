import React from "react";
import { RadialBarChart, RadialBar, Tooltip, Legend } from "recharts";

const Score = () => {
  const CustomizedContent = ({ cx, cy, value = "12%" }) => {
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#282D30">
          {`${value}`}
        </text>
      </g>
    );
  };

  return (
    <div
      className="score-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RadialBarChart
        width={400}
        height={400}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={140}
        barSize={10}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#FF0000" }}
          background
          clockWise
          dataKey="value"
        />
        <Tooltip />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <CustomizedContent
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={140}
          value="12%"
        />
      </RadialBarChart>
    </div>
  );
};

export default Score;
