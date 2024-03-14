export const getUserInfos = async (userId) => {
  const response = await fetch(`http://localhost:3001/user/${userId}`);
  if (response.ok) {
    const userInfo = await response.json();
    return userInfo.data;
  } else {
    throw new Error("Error: user not found");
  }
};

export const getUserActivities = async (userId) => {
  const response = await fetch(`http://localhost:3001/user/${userId}/activity`);
  if (response.ok) {
    const userActivity = await response.json();
    return userActivity.data;
  } else {
    throw new Error("Error: activities of user not found");
  }
};

export const getUserSessions = async (userId) => {
  const response = await fetch(
    `http://localhost:3001/user/${userId}/average-sessions`
  );
  if (response.ok) {
    const averageSessions = await response.json();
    return averageSessions.data;
  } else {
    throw new Error("Error: sessions of user not found");
  }
};

export const getUserPerformance = async (userId) => {
  const response = await fetch(
    `http://localhost:3001/user/${userId}/performance`
  );
  if (response.ok) {
    const performance = await response.json();
    return performance.data;
  } else {
    throw new Error("Error: performances of user not found");
  }
};
