import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Time = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("mock.json")
      .then((res) => {
        setData(res.data.USER_AVERAGE_SESSIONS[0]);
        console.log(res.data.USER_AVERAGE_SESSIONS[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getWeekdayAbbreviation = (day) => {
    const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
    return weekdays[day - 1];
  };

  const CustomXAxisTick = ({ x, y, payload }) => {
    const weekdayAbbreviation = getWeekdayAbbreviation(payload.value);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#fff">
          {weekdayAbbreviation}
        </text>
      </g>
    );
  };
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
        data={data.sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeOpacity={0} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={{ fill: "#fff" }}
          tick={<CustomXAxisTick />}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default Time;
