import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function App() {
  const [legend, setLegend] = useState(null);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("../../public/mock.json")
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

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
        <p className="legend-kg">
          <span className="point-kg"></span>Poids (kg)
        </p>
        <p className="legend-kcal">
          <span className="point-kcal"></span>Calories brûlées (kCal)
        </p>
      </div>
    );
  }, []);

  return (
    <div className="activity">
      <div className="activity-container">
        <h3 className="activity-title">Activité quotidienne</h3>
        <BarChart width={800} height={300} data={data[0].sessions}>
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
