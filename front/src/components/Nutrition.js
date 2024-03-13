import React from "react";
import NutriCard from "./NutriCard";

const Nutrition = () => {
  const data = [
    {
      id: 12,
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  ];

  return (
    <div className="nutrition-container">
      <NutriCard data={data[0].keyData.calorieCount} nutrient="Calories" />
      <NutriCard data={data[0].keyData.proteinCount} nutrient="Proteins" />
      <NutriCard
        data={data[0].keyData.carbohydrateCount}
        nutrient="Carbohydrates"
      />
      <NutriCard data={data[0].keyData.lipidCount} nutrient="Lipids" />
    </div>
  );
};

export default Nutrition;
