import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Time = () => {
  const data = [
    {
      userId: 12,
      sessions: [
        { day: 1, sessionLength: 30 },
        { day: 2, sessionLength: 23 },
        { day: 3, sessionLength: 45 },
        { day: 4, sessionLength: 50 },
        { day: 5, sessionLength: 0 },
        { day: 6, sessionLength: 0 },
        { day: 7, sessionLength: 60 },
      ],
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const tooltipContent = payload.map((entry, index) => {
        let label = entry.name;

        if (entry.name === "sessionLength") {
          label = "min";
        }

        return (
          <p className="tool-length" key={index}>
            {`${entry.value} ${label}`}
          </p>
        );
      });

      return <div className="tool-length-container">{tooltipContent}</div>;
    }

    return null;
  };

  const legendStyles = {
    width: "147px",
    flexShrink: 0,
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    opacity: 0.504,
  };

  return (
    <div className="time-container">
      <div className="legend-text" style={legendStyles}>
        Durée moyenne des sessions
      </div>
      <LineChart
        width={300}
        height={250}
        data={data[0].sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#fff" />{" "}
      </LineChart>
    </div>
  );
};

export default Time;
