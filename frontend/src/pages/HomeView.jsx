import { getUserData, getUserSessions } from "../services/mockDataServices.js";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import DailyActivity from "../components/DailyActivity";
import AverageSessionsDuration from "../components/AverageSessionsDuration";
import lodash from "lodash";

function Home() {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const averageSessionsData = getUserSessions(id);

  useEffect(() => {
    const toto = async () => {
      const userDataResults = await getUserData(id);
      setUserData(userDataResults);
    };
    toto();
  }, []);

  useEffect(() => {
    if (userData) {
      document.title = `${userData.userInfos.firstName} ${userData.userInfos.lastName}`;
    }
  }, [userData]);

  // if (!userData) {
  //   return <Navigate to="/page-not-found" />;
  // }

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
              {userData && userData.userInfos.firstName}
            </span>
          </h1>
          {userHasDoneSport()}
          <div className="dashboard-container">
            <DailyActivity />
            <AverageSessionsDuration />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
