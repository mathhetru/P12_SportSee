import PropTypes from "prop-types";
import Card from "./Card";

// import icons for cards
import iconCalories from "../assets/icons/sportsee-icon-calories.svg";
import iconGlucides from "../assets/icons/sportsee-icon-glucides.svg";
import iconLipides from "../assets/icons/sportsee-icon-lipides.svg";
import iconProteines from "../assets/icons/sportsee-icon-proteines.svg";

function CardsOnRight(props) {
  /**
   * @description translation - Object with the translation for the cards
   * @returns {Object}
   */
  const translation = {
    calorieCount: {
      name: "Calories",
      icon: iconCalories,
      class: "red",
      type: "kCal",
    },
    proteinCount: {
      name: "Proteines",
      icon: iconProteines,
      class: "blue",
      type: "g",
    },
    carbohydrateCount: {
      name: "Glucides",
      icon: iconGlucides,
      class: "yellow",
      type: "g",
    },
    lipidCount: {
      name: "Lipides",
      icon: iconLipides,
      class: "pink",
      type: "g",
    },
  };

  /**
   * @description This function is used to map the data from the API to the cards on the right
   * @returns {Array}
   */
  const dataCards = () => {
    const data = Object.entries(props.keyData).map((entry) => {
      return {
        name: translation[entry[0]].name,
        value: entry[1],
        type: translation[entry[0]].type,
        icon: translation[entry[0]].icon,
        class: translation[entry[0]].class,
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
