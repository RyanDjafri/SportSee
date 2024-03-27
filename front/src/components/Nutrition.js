import React, { useEffect, useState } from "react";
import NutriCard from "./NutriCard";
import axios from "axios";

const Nutrition = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("mock.json")
      .then((res) => {
        const user = res.data.USER_MAIN_DATA.find((user) => user.id === 12);
        if (user) {
          setUserData(user.keyData);
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="nutrition-container">
      {userData && (
        <>
          <NutriCard data={userData.calorieCount} nutrient="Calories" />
          <NutriCard data={userData.proteinCount} nutrient="Proteines" />
          <NutriCard data={userData.carbohydrateCount} nutrient="Glucides" />
          <NutriCard data={userData.lipidCount} nutrient="Lipides" />
        </>
      )}
    </div>
  );
};

export default Nutrition;
