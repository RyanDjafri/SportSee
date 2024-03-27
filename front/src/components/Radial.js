import React from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

const Radial = () => {
  return (
    <div className="radar-container">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="12%"
        outerRadius="88%"
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#E60000", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="score"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default Radial;
