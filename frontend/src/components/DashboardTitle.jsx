import PropTypes from "prop-types";
function DashboardTitle(props) {
  /**
   * @description This function is used to check if the user has done sport
   * @returns {Object}
   */
  const userHasDoneSport = () => {
    const sportQuantity = props.sessions.map(
      (session) => session.sessionLength
    );

    const sumInitial = 0;
    const sum = sportQuantity.reduce((acc, curr) => {
      return acc + curr;
    }, sumInitial);

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
    <div>
      <h1 className="dashboard-title">
        Bonjour{" "}
        <span className="dashboard-title name">
          {props.user.userInfos.firstName}
        </span>
      </h1>
      {userHasDoneSport()}
    </div>
  );
}

DashboardTitle.propTypes = {
  user: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
};

export default DashboardTitle;
