import { getUserInfos } from "../services/mockDataServices.js";
import PropTypes from "prop-types";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";

function User() {
  const { id } = useParams();
  const [infosData, setInfosUserData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const userData = getUserInfos(id);

      Promise(userData)
        .then((resultUserData) => {
          setInfosUserData(resultUserData);
        })
        .catch((error) => {
          console.error(error.message);
        });
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

  return (
    <div className="home">
      <HorizontalNav />
      <div className="home-container">
        <VerticalNav />
        <div className="dashboard">{infosData && <div>{infosData} </div>}</div>
      </div>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.string,
};

export default User;
