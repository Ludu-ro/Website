import React, { createContext, ReactNode, useReducer, useState } from "react";
import { Course } from "../types/Course";
import { CourseActions } from "./actions/CourseActions";
import { CourseReducer } from "./reducers/CourseReducer";

export type CourseMap = {
  [tag: string]: Array<Course>; // tag to course array dictionary
};

export type CourseState = {
  courses: CourseMap;
  isLoading: boolean;
};

export interface CourseContextInterface {
  courses: CourseMap;
  isLoading: boolean;
  dispatch: React.Dispatch<CourseActions>;
}

const CoursesContext = createContext<CourseContextInterface>({
  courses: {},
  isLoading: true,
  dispatch: () => {},
});

const CoursesContextProvider = ({ children }: { children: ReactNode }) => {
  const [courses, dispatch] = useReducer(CourseReducer, {
    courses: {},
    isLoading: true,
  });

  return (
    <CoursesContext.Provider value={{ ...courses, dispatch }}>
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesContextProvider };
