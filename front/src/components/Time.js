import React, { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import ApiHook from "./apiHook";

const Time = () => {
  const [data, setData] = useState([]);

  const { data: apiData, error } = ApiHook("mock.json");

  useEffect(() => {
    if (apiData && apiData.USER_AVERAGE_SESSIONS) {
      setData(apiData.USER_AVERAGE_SESSIONS[0]);
    }
    if (error) {
      return <div>data indisponible</div>;
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
          <div className="tool-length-container" key={index}>
            <span className="tool-length">{`${entry.value} ${label}`}</span>
          </div>
        );
      });

      return <div className="custom-tooltip">{tooltipContent}</div>;
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
  const axisStyles = {
    fontFamily: "Roboto",
    color: "#FFF",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
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
        margin={{ top: 2, right: 60, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={<CustomXAxisTick />}
          style={axisStyles}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </div>
  );
};

export default Time;
