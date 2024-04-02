import React from "react";
import NutriCard from "./NutriCard";
import ApiHook from "./apiHook";

const Nutrition = () => {
  const { data, error } = ApiHook("mock.json");

  if (error) {
    console.error("Error fetching data:", error);
  }

  const userData = data?.USER_MAIN_DATA.find((user) => user.id === 12)?.keyData;

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
