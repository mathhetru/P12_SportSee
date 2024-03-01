import PropTypes from "prop-types";
import Card from "./Card";

// import icons for cards
import iconCalories from "../assets/icons/sportsee-icon-calories.svg";
import iconGlucides from "../assets/icons/sportsee-icon-glucides.svg";
import iconLipides from "../assets/icons/sportsee-icon-lipides.svg";
import iconProteines from "../assets/icons/sportsee-icon-proteines.svg";

function CardsOnRight(props) {
  const translateCounts = {
    calorieCount: "Calories",
    proteinCount: "Proteines",
    carbohydrateCount: "Glucides",
    lipidCount: "Lipides",
  };

  const translateIcons = {
    calorieCount: iconCalories,
    proteinCount: iconProteines,
    carbohydrateCount: iconGlucides,
    lipidCount: iconLipides,
  };

  const translateValues = {
    calorieCount: "kCal",
    proteinCount: "g",
    carbohydrateCount: "g",
    lipidCount: "g",
  };

  const translateClasses = {
    calorieCount: "red",
    proteinCount: "blue",
    carbohydrateCount: "yellow",
    lipidCount: "pink",
  };

  const dataCards = () => {
    const data = Object.entries(props.keyData).map((entry) => {
      return {
        name: translateCounts[entry[0]],
        value: entry[1],
        type: translateValues[entry[0]],
        icon: translateIcons[entry[0]],
        class: translateClasses[entry[0]],
      };
    });
    return data;
  };

  return (
    <div className="cards-right">
      {dataCards().map((data, index) => {
        return (
          <Card
            key={index}
            name={data.name}
            value={data.value}
            type={data.type}
            icon={data.icon}
            class={data.class}
          />
        );
      })}
    </div>
  );
}

CardsOnRight.propTypes = {
  keyData: PropTypes.object,
};

export default CardsOnRight;
