import React from "react";
import Calorie from "../assets/icon-calorie.png";
import Protein from "../assets/icon-protein.png";
import Lipid from "../assets/icon-lipid.png";
import Carbo from "../assets/icon-carbohydrate.png";

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
      <div className="calories nutri-div">
        <img src={Calorie} alt="calories-icon" className="nutri-img" />
        <div className="calories-values">
          <p className="calories">{data[0].keyData.calorieCount}kCal</p>
          <p className="calories-title">Calories</p>
        </div>
      </div>
      <div className="proteins nutri-div">
        <img src={Protein} alt="proteins-icon" className="nutri-img" />
        <div className="proteins-values">
          <p className="proteins">{data[0].keyData.proteinCount}g</p>
          <p className="proteins-title">Proteines</p>
        </div>
      </div>
      <div className="carbo nutri-div">
        <img src={Carbo} alt="carbo-icon" className="nutri-img" />
        <div className="carbo-values">
          <p className="carbo">{data[0].keyData.carbohydrateCount}g</p>
          <p className="carbo-title">Glucides</p>
        </div>
      </div>
      <div className="fats nutri-div">
        <img src={Lipid} alt="lipid-icon" className="nutri-img" />
        <div className="lipids-values">
          <p className="lipids">{data[0].keyData.calorieCount}kCal</p>
          <p className="lipids-title">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
