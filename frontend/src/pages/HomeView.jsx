import {
  getUserInfos,
  getUserActivities,
  getUserSessions,
} from "../services/mockDataServices.js";
import PropTypes from "prop-types";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import DailyActivity from "../components/DailyActivity";
import AverageSessionsDuration from "../components/AverageSessionsDuration";
import lodash from "lodash";

function Home() {
  const { id } = useParams();
  const [infosData, setInfosUserData] = useState(null);
  const [activitiesData, setActivitiesData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserInfos(id);
      const userActivitiesData = await getUserActivities(id);
      const userSessionsData = await getUserSessions(id);
      setInfosUserData(userData);
      setActivitiesData(userActivitiesData);
      setSessionsData(userSessionsData);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (infosData) {
      document.title = `${infosData.userInfos.firstName} ${infosData.userInfos.lastName}`;
    }
  }, [infosData]);

  // if (!infosData) {
  //   return <Navigate to="/page-not-found" />;
  // }

  const userHasDoneSport = () => {
    const sportQuantity = sessionsData.sessions.map(
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
    <div className="home">
      <HorizontalNav />
      <div className="home-container">
        <VerticalNav />
        <div className="dashboard">
          <h1 className="dashboard-title">
            Bonjour{" "}
            <span className="dashboard-title name">
              {/* {infosData ? infosData.userInfos.firstName : null} */}
              {infosData && infosData.userInfos.firstName}
            </span>
          </h1>
          {sessionsData && userHasDoneSport()}
          <div className="dashboard-container">
            {infosData && (
              <DailyActivity
                user={infosData}
                activities={activitiesData.sessions}
              />
            )}
            <div className="dashboard-bottom-container">
              {sessionsData && (
                <AverageSessionsDuration sessions={sessionsData.sessions} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  id: PropTypes.string,
};

export default Home;
