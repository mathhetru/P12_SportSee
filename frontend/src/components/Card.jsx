import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <div className={`${props.class} card-picture`}>
        <img className="card__img" src={props.icon} alt="calories" />
      </div>
      <div className="card-text">
        <h2 className="card-text__title">
          {props.value}
          {props.type}
        </h2>
        <p className="card-text__subtitle">{props.name}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  icon: PropTypes.string,
  class: PropTypes.string,
};

export default Card;
