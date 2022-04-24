import { CoursesContext, CoursesContextProvider } from "./CourseContext";
import { CourseActionType, CourseActions } from "./actions/CourseActions";
import { CourseReducer } from "./reducers//CourseReducer";

import { UserContext, UserContextProvider } from "./UserContext";
import { UserActionType, UserActions } from "./actions//UserActions";
import { UserReducer } from "./reducers/UserReducer";

import { CourseDetailsContext, CourseDetailsContextProvider } from "./CourseDetailsContext";
import { CourseDetailsActionType, CourseDetailsActions } from "./actions/CourseDetailsActions";
import { CourseDetailsReducer } from "./reducers/CourseDetailsReducer";

import { useSocket } from "./useSocket";



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
  // socket
  useSocket,
};
export type { CourseActions, UserActions, CourseDetailsActions };
