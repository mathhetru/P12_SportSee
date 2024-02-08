import { getUserData, getUserSessions } from "../services/mockDataServices.js";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import DailyActivity from "../components/DailyActivity";
import lodash from "lodash";

function Home() {
  const { id } = useParams();
  const userData = getUserData(id);

  const averageSessionsData = getUserSessions(id);
  console.log(userData);

  // useEffect(() => {
  //     const userData = await getUserData(id); // Fetching user activity data
  //     if (userData && userData.data && userData.data.sessions) {
  //       setUserActivity(userData.data.sessions); // Setting user activity data in state
  //     }
  //   };
  // }, [userId]);

  useEffect(() => {
    if (userData) {
      document.title = `${userData.userInfos.firstName} ${userData.userInfos.lastName}`;
    }
  }, [userData]);

  if (!userData) {
    return <Navigate to="/page-not-found" />;
  }

  const userHasDoneSport = () => {
    const sportQuantity = averageSessionsData.sessions.map(
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
              {userData.userInfos.firstName}
            </span>
          </h1>
          {userHasDoneSport()}
          <div className="dashboard-container">
            <DailyActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
