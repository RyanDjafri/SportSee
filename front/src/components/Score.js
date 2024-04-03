import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const Score = () => {
  const data = [{ value: 12, fill: "#FF0000" }];
  const CustomizedContent = ({ cx, cy, value }) => {
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#282D30">
          {`${value}%`}
        </text>
      </g>
    );
  };

  return (
    <div
      className="score-container"
      style={{ position: "relative", width: "300px" }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "#282D30",
          fontSize: "14px",
          fontFamily: "Roboto",
        }}
      >
        Score
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#74798C",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "#282D30",
            fontSize: "26px",
            fontFamily: "Roboto",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {data[0].value}%<br />
        </span>
        de votre <br />
        objectif
      </div>
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
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#FF0000" }}
          clockWise
          dataKey="value"
        />
        <CustomizedContent cx={200} cy={200} />
      </RadialBarChart>
    </div>
  );
};

export default Score;
