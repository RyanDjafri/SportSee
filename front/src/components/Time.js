import React, { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import ApiHook from "./apiHook";

const Time = () => {
  const [data, setData] = useState([]);

  const { data: apiData } = ApiHook("mock.json");

  useEffect(() => {
    if (apiData && apiData.USER_AVERAGE_SESSIONS) {
      setData(apiData.USER_AVERAGE_SESSIONS[0]);
    }
  }, [apiData]);

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
          <div className="tool-length-container">
            <span className="tool-length" key={index}>
              {`${entry.value} ${label}`}
            </span>
          </div>
        );
      });

      return tooltipContent;
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
