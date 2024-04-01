import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function App() {
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

  return (
    <div className="activity">
      <div className="activity-container">
        <h3 className="activity-title">Activité quotidienne</h3>
        <BarChart width={900} height={300} data={data.sessions}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="tool-container">
                    {payload.map((entry, index) => (
                      <p className="tool" key={index}>
                        {`${entry.value} ${
                          entry.name === "kilogram" ? "kg" : "kCal"
                        }`}
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            content={
              <div className="legend">
                <p className="legend-item">
                  <div className="point point-kg"></div> Poids (kg)
                </p>
                <p className="legend-item">
                  <div className="point point-kcal"></div> Calories brûlées
                  (kCal)
                </p>
              </div>
            }
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={15}
            radius={[5, 5, 0, 0]}
          />
          <YAxis orientation="right" style={axisStyles} />
          <XAxis style={axisStyles} />
        </BarChart>
      </div>
    </div>
  );
}
