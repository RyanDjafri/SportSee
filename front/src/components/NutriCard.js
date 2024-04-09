import React from "react";
import Calorie from "../assets/icon-calorie.png";
import Protein from "../assets/icon-protein.png";
import Lipid from "../assets/icon-lipid.png";
import Carbo from "../assets/icon-carbohydrate.png";

const NutriCard = ({ data, nutrient }) => {
  const nutrientIcons = {
    Calories: Calorie,
    Proteines: Protein,
    Lipides: Lipid,
    Glucides: Carbo,
  };

  const unit = nutrient === "Calories" ? "kCal" : "g";

  return (
    <div className={`${nutrient.toLowerCase()} nutri-div`}>
      <img
        src={nutrientIcons[nutrient]}
        alt={`${nutrient.toLowerCase()}-icon`}
        className="nutri-img"
      />
      <div className={`${nutrient.toLowerCase()}-values`}>
        <p className={`${nutrient.toLowerCase()}`}>
          {data}
          {unit}
        </p>
        <p className={`${nutrient.toLowerCase()}-title`}>{nutrient}</p>
      </div>
    </div>
  );
};

export default NutriCard;
