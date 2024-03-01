import PropTypes from "prop-types";
import lodash from "lodash";

function DashboardTitle(props) {
  const userHasDoneSport = () => {
    const sportQuantity = props.sessions.map(
      (session) => session.sessionLength
    );
    const sum = lodash.sum(sportQuantity);
    if (sum > 175) {
      return (
        <p className="dashboard__text">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      );
    } else {
      return (
        <p className="dashboard__text">
          Courage ! Vous ferez mieux la semaine prochaine ! 💪
        </p>
      );
    }
  };

  return (
    <h1 className="dashboard-title">
      Bonjour{" "}
      <span className="dashboard-title name">
        {props.user.userInfos.firstName}
      </span>
      {userHasDoneSport()}
    </h1>
  );
}

DashboardTitle.propTypes = {
  user: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
};

export default DashboardTitle;
