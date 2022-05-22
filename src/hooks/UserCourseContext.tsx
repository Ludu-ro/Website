import React, { createContext, ReactNode, useReducer } from "react";
import { Course } from "../types/Course";
import { UserCourseActions } from "./actions/UserCourseActions";
import { UserCourseReducer } from "./reducers/UserCourseReducer";

export type UserCourseState = {
  courses: Array<Course>;
  isLoading: boolean;
};

export interface UserCourseInterface {
  courses: Array<Course>;
  isLoading: boolean;
  dispatch: React.Dispatch<UserCourseActions>;
}

const UserCourseContext = createContext<UserCourseInterface>({
  courses: [],
  isLoading: true,
  dispatch: () => {},
});

const UserCourseContextProvider = ({ children }: { children: ReactNode }) => {
  const [courses, dispatch] = useReducer(UserCourseReducer, {
    courses: [],
    isLoading: true,
  });
  return (
    <UserCourseContext.Provider value={{ ...courses, dispatch }}>
      {children}
    </UserCourseContext.Provider>
  );
};

export { UserCourseContext, UserCourseContextProvider };
