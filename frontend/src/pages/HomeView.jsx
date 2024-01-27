import data from "../data/user.json";
// import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  // const { id } = useParams();
  const user = data;
  const userId = user.userId;

  useEffect(() => {
    if (user) {
      document.title = `${user.userInfos.firstName} ${user.userInfos.lastName}`;
    }
  }, [user]);

  // if (id !== user) return <Navigate to="/error" />;
  // else
  return (
    <div className="home">
      <aside className="home-greycard">
        {/* {data.map((house) => (
          <Card
            img={house.cover}
            key={house.id}
            id={house.id}
            title={house.title}
          />
        ))} */}
      </aside>
    </div>
  );
}

export default Home;
