import React, { createContext, ReactNode, useReducer } from "react";
import { CourseDetailsReducer }  from "./reducers/CourseDetailsReducer";
import { Course } from "../types/Course";
import { CourseDetailsActions } from "./actions/CourseDetailsActions";

export type CourseDetailsState = {
  courseDetails: Course | null;
  isLoading: boolean;
};

export interface CourseDetailsContextInterface {

  courseDetails: Course | null;
  isLoading: boolean;
  dispatch: React.Dispatch<CourseDetailsActions>;
}

const CourseDetailsContext = createContext<CourseDetailsContextInterface>({

  courseDetails: null,
  isLoading: true,
  dispatch: () => {},
});

const CourseDetailsContextProvider = ({ children }: { children: ReactNode }) => {

    const [courseDetails, dispatch] = useReducer(CourseDetailsReducer, {
    courseDetails: null,
    isLoading: true,
  });

  return (
    <CourseDetailsContext.Provider value={{ ...courseDetails, dispatch }}>
      {children}
    </CourseDetailsContext.Provider>
  );
};

export { CourseDetailsContext, CourseDetailsContextProvider };
