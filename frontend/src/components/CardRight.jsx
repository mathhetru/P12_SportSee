import PropTypes from "prop-types";

function CardRight(props) {
  
  return (
    <div className="accomodation-card">
      <h2 className="accomodation-card__text">{props}</h2>
      <div className="accomodation-card-picture">
        {/* <img
          src={props}
          alt="accomodation-card"
          className="accomodation-card-picture__img"
        /> */}
      </div>
    </div>
  );
}

CardRight.propTypes = {
  data: PropTypes.array,
};

export default CardRight;
