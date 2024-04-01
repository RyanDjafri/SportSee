import React from "react";
import { RadialBarChart, RadialBar, Tooltip, Legend } from "recharts";

const data = [{ name: "Score", value: 12, fill: "#FF0000" }];

const CustomizedContent = ({ cx, cy, innerRadius, outerRadius, value }) => {
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#282D30">
        {`${value}%`}
      </text>
    </g>
  );
};

const Score = () => {
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
        data={data}
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
          value={data[0].value}
        />
      </RadialBarChart>
    </div>
  );
};

export default Score;
