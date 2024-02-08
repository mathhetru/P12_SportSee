import mockData from "./mockData.json";

export const getUserData = (userId) => {
  // ? async await ?
  if (mockData[userId]) {
    console.log(mockData[userId].userInfo);
    return mockData[userId].userInfo;
  } else {
    throw new Error("Error: user not found");
  }
};

export const getUserActivities = (userId) => {
  if (mockData[userId].userActivity) {
    return mockData[userId].userActivity;
  } else {
    throw new Error("Error: user's activities not found");
  }
};

export const getUserSessions = (userId) => {
  if (mockData[userId].averageSessions) {
    return mockData[userId].averageSessions;
  } else {
    throw new Error("Error: user's sessions not found");
  }
};
