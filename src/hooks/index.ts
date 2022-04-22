import { CoursesContext, CoursesContextProvider } from "./CourseContext";
import { CourseActionType, CourseActions } from "./actions/CourseActions";
import { CourseReducer } from "./reducers//CourseReducer";

import { UserContext, UserContextProvider } from "./UserContext";
import { UserActionType, UserActions } from "./actions//UserActions";
import { UserReducer } from "./reducers/UserReducer";

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
  // socket
  useSocket,
};
export type { CourseActions, UserActions };
