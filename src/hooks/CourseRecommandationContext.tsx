import React, { createContext, ReactNode, useReducer, useState } from "react";
import { Course } from "../types/Course";
import { CourseRecommandationActions } from "./actions/CourseRecommandationActions";
import { CourseRecommandationReducer } from "./reducers/CourseRecommandationReducer";

export type CourseRecommandationState = {
  courses: Array<Course>;
  isLoading: boolean;
};

export interface CourseRecommandationContextInterface {
  courses: Array<Course>;
  isLoading: boolean;
  dispatch: React.Dispatch<CourseRecommandationActions>;
}

const CoursesRecommandationContext = createContext<CourseRecommandationContextInterface>({
  courses: [],
  isLoading: true,
  dispatch: () => {},
});

const CoursesRecommandationContextProvider = ({ children }: { children: ReactNode }) => {
  const [courses, dispatch] = useReducer(CourseRecommandationReducer, {
    courses: [],
    isLoading: true,
  });
  return (
    <CoursesRecommandationContext.Provider value={{ ...courses, dispatch }}>
      {children}
    </CoursesRecommandationContext.Provider>
  );
};

export { CoursesRecommandationContext, CoursesRecommandationContextProvider };
