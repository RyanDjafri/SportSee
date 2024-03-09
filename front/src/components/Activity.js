import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export default function App() {
  const data = [
    {
      userId: 12,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 80,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 80,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 81,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 81,
          calories: 290,
        },
        {
          day: "2020-07-05",
          kilogram: 80,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 78,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 76,
          calories: 390,
        },
      ],
    },
  ];
  const axisStyles = {
    color: "#9B9EAC",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
  };

  const barStyles = {
    barSize: "15",
    borderRadius: "5px",
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const tooltipContent = payload.map((entry, index) => {
        if (entry.name === "calories" || entry.name === "kilogram") {
          return <p key={index}>{`${entry.name}: ${entry.value}`}</p>;
        }
        return null;
      });

      return <div>{tooltipContent}</div>;
    }

    return null;
  };
  return (
    <div className="activity">
      {/* <h3>Activité quotidienne</h3> */}
      <div className="activity-container">
        <BarChart width={800} height={300} data={data[0].sessions}>
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend verticalAlign="top" horizontalAlign="right" /> */}
          <Bar dataKey="kilogram" fill="#E60000" barStyles={barStyles} />
          <Bar dataKey="calories" fill="#282D30" barStyles={barStyles} />
          <YAxis dataKey="kilogram" orientation="right" style={axisStyles} />
          <XAxis datakey="day" style={axisStyles} />
        </BarChart>
      </div>
    </div>
  );
}
