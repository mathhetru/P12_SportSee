import {
  getUserInfos,
  getUserActivities,
  getUserSessions,
  getUserPerformance,
} from "../services/mockDataServices.js";
// import {
//   getUserInfos,
//   getUserActivities,
//   getUserSessions,
//   getUserPerformance,
// } from "../services/APIDataServices.js";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import DashboardTitle from "../components/DashboardTitle.jsx";
import DailyActivity from "../components/DailyActivity";
import RadarPerformance from "../components/RadarPerformance";
import AverageSessionsDuration from "../components/AverageSessionsDuration";
import CardsOnRight from "../components/CardsOnRight.jsx";
import Score from "../components/Score";
function Home() {
  const { id } = useParams();
  const [userInfosData, setInfosUserData] = useState(null);
  const [activitiesData, setActivitiesData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);
  const [perfomanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    /**
     * @description This function is used to fetch the data from the API
     */
    const fetchData = () => {
      const userData = getUserInfos(id);
      const userActivitiesData = getUserActivities(id);
      const userSessionsData = getUserSessions(id);
      const userPerformanceData = getUserPerformance(id);

      Promise.all([
        userData,
        userActivitiesData,
        userSessionsData,
        userPerformanceData,
      ])
        .then(
          ([
            resultUserData,
            resultActivitiesData,
            resultSessionData,
            resultPerformanceData,
          ]) => {
            setInfosUserData(resultUserData);
            setActivitiesData(resultActivitiesData);
            setSessionsData(resultSessionData);
            setPerformanceData(resultPerformanceData);
          }
        )
        .catch((error) => {
          console.error(error.message);
        });
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (userInfosData) {
      document.title = `${userInfosData.userInfos.firstName} ${userInfosData.userInfos.lastName}`;
    }
  }, [userInfosData]);

  return (
    <div className="home">
      <HorizontalNav />
      <div className="home-container">
        <VerticalNav />
        <div className="dashboard">
          {userInfosData && (
            <DashboardTitle
              user={userInfosData}
              sessions={sessionsData.sessions}
            />
          )}
          <div className="dashboard-container">
            <div className="dashboard-left-container">
              {userInfosData && (
                <DailyActivity activities={activitiesData.sessions} />
              )}
              <div className="dashboard-bottom-container">
                {sessionsData && (
                  <AverageSessionsDuration sessions={sessionsData.sessions} />
                )}
                {perfomanceData && (
                  <RadarPerformance
                    kinds={perfomanceData.kind}
                    data={perfomanceData.data}
                  />
                )}
                {userInfosData && (
                  <Score
                    score={userInfosData.todayScore || userInfosData.score}
                  />
                )}
              </div>
            </div>
            <div className="dashboard-right-container">
              {userInfosData && (
                <CardsOnRight keyData={userInfosData.keyData} />
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
