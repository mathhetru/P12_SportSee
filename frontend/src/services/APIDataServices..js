import mockData from "./mockData.json";

/**
 * 
 * @param {*} userId 
 * @returns 
 */
export const getUserInfos = async (userId) => {
  if (mockData[userId] && userId == mockData[userId].userInfo.id) {
    return mockData[userId].userInfo;
  } else {
    throw new Error("Error: user not found");
  }
};

/**
 * 
 * @param {*} userId 
 * @returns 
 */
export const getUserActivities = (userId) => {
  if (
    mockData[userId].userActivity &&
    userId == mockData[userId].userActivity.userId
  ) {
    return mockData[userId].userActivity;
  } else {
    throw new Error("Error: user's activities not found");
  }
};

/**
 * 
 * @param {*} userId 
 * @returns 
 */
export const getUserSessions = (userId) => {
  if (
    mockData[userId].averageSessions &&
    userId == mockData[userId].averageSessions.userId
  ) {
    return mockData[userId].averageSessions;
  } else {
    throw new Error("Error: user's sessions not found");
  }
};

/**
 * 
 * @param {*} userId 
 * @returns 
 */
export const getUserPerformance = (userId) => {
  if (
    mockData[userId].performance &&
    userId == mockData[userId].performance.userId
  ) {
    return mockData[userId].performance;
  } else {
    throw new Error("Error: user's performance not found");
  }
};
