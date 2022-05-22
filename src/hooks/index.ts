import { CoursesContext, CoursesContextProvider } from "./CourseContext";
import { CourseActionType, CourseActions } from "./actions/CourseActions";
import { CourseReducer } from "./reducers//CourseReducer";

import { UserContext, UserContextProvider } from "./UserContext";
import { UserActionType, UserActions } from "./actions//UserActions";
import { UserReducer } from "./reducers/UserReducer";

import { CourseDetailsContext, CourseDetailsContextProvider } from "./CourseDetailsContext";
import { CourseDetailsActionType, CourseDetailsActions } from "./actions/CourseDetailsActions";
import { CourseDetailsReducer } from "./reducers/CourseDetailsReducer";

import { CoursesRecommandationContext, CoursesRecommandationContextProvider } from "./CourseRecommandationContext";
import { CourseRecommandationActionType, CourseRecommandationActions } from "./actions/CourseRecommandationActions";
import { CourseRecommandationReducer } from "./reducers/CourseRecommandationReducer";

import { useSocket } from "./useSocket";
import { UserCourseContext, UserCourseContextProvider } from "./UserCourseContext"
import { UserCourseActions, UserCourseActionType } from "./actions/UserCourseActions";
import { UserCourseReducer } from "./reducers/UserCourseReducer";

export {
  // courses context
  CoursesContext,
  CoursesContextProvider,
  CourseActionType,
  CourseReducer,
  // users context
  UserContext,
  UserContextProvider,
  UserActionType,
  UserReducer,
  //courseDetails
  CourseDetailsContext,
  CourseDetailsContextProvider,
  CourseDetailsActionType,
  CourseDetailsReducer,
  //courseRecommandation
  CoursesRecommandationContext,
  CoursesRecommandationContextProvider,
  CourseRecommandationActionType,
  CourseRecommandationReducer,
  //userCourse
  UserCourseContext,
  UserCourseContextProvider,
  UserCourseActionType,
  UserCourseReducer,
  // socket
  useSocket,
};
export type { CourseActions, UserActions, CourseDetailsActions, CourseRecommandationActions, UserCourseActions };
