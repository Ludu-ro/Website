import getAchievements from "./achievements/getUserAchievements";
import addAchievement from "./achievements/addAchievement";

import getCourse from "./courses/getCourse";
import getCourses from "./courses/getCourses";

import login from "./users/login";
import register from "./users/register";
import startModule from "./users/startModule";
import startCourse from "./users/startCourse";
import addModules from "./users/addModules";
import finishModule from "./users/finishModule";
import getResource from "./modules/getResource";
import increaseXp from "./users/increaseXp";
import getDetails from "./users/getDetails";

import getCourseRecommandation from "./assistant/getCourseRecommandation";
import getStudentStatistics from "./assistant/getStudentStatistics";

export {
  getAchievements,
  addAchievement,
  getCourses,
  login,
  register,
  getCourse,
  startModule,
  startCourse,
  addModules,
  finishModule,
  getResource,
  increaseXp,
  getDetails,
  getCourseRecommandation,
  getStudentStatistics
};
