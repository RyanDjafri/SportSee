import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function App() {
  const [legend, setLegend] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("mock.json")
      .then((res) => {
        setData(res.data.USER_ACTIVITY[0]);
        console.log(res.data.USER_ACTIVITY[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const axisStyles = {
    color: "#9B9EAC",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const tooltipContent = payload.map((entry, index) => {
        let label = entry.name;

        if (entry.name === "calories") {
          label = "kCal";
        } else if (entry.name === "kilogram") {
          label = "kg";
        }

        return <p className="tool" key={index}>{`${entry.value} ${label}`}</p>;
      });

      return <div className="tool-container">{tooltipContent}</div>;
    }

    return null;
  };

  useEffect(() => {
    setLegend(
      <div className="legend">
        <p className="legend-item">
          <div className="point point-kg"></div> Poids (kg)
        </p>
        <p className="legend-item">
          <div className="point point-kcal"></div> Calories brûlées (kCal)
        </p>
      </div>
    );
  }, []);

  return (
    <div className="activity">
      <div className="activity-container">
        <h3 className="activity-title">Activité quotidienne</h3>
        <BarChart width={930} height={300} data={data.sessions}>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={legend} verticalAlign="top" align="right" />
          <Bar
            dataKey="kilogram"
            fill="#E60000"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#282D30"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
          <YAxis dataKey="kilogram" orientation="right" style={axisStyles} />
          <XAxis dataKey="day" style={axisStyles} domain={[1, "dataMax"]} />
        </BarChart>
      </div>
    </div>
  );
}
