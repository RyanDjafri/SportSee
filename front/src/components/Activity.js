import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import ApiHook from "./apiHook";

export default function App() {
  const { data, error } = ApiHook("mock.jso");
  const [processedData, setProcessedData] = useState(null);

  useEffect(() => {
    if (data) {
      const processedData = data.USER_ACTIVITY[0].sessions.map(
        (session, index) => ({
          ...session,
          x: index + 1,
        })
      );
      setProcessedData(processedData);
    }
  }, [data]);

  const axisStyles = {
    color: "#9B9EAC",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
  };

  const customLegend = () => {
    return (
      <div className="legend">
        <div className="legend-item">
          <span className="point point-kg"></span>
          <span>Poids (kg)</span>
        </div>
        <div className="legend-item">
          <span className="point point-kcal"></span>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    );
  };

  if (error) {
    return <div className="error-message">Data indisponible, erreur API</div>;
  }

  return (
    <div className="activity">
      <h3 className="activity-title">Activité quotidienne</h3>
      <div
        className="chart-container"
        style={{ marginLeft: "30px" }}
        data={processedData}
      >
        <BarChart width={900} height={300}>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="tool-container">
                    {payload.map((entry, index) => (
                      <p className="tool" key={index}>
                        {`${entry.value} ${
                          entry.dataKey === "kilogram" ? "kg" : "kCal"
                        }`}
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend verticalAlign="top" align="right" content={customLegend} />
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
          <XAxis style={axisStyles} dataKey="x" />
        </BarChart>
      </div>
    </div>
  );
}
