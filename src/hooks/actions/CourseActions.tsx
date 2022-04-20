import { Course } from "../../types/Course";

export enum ActionType {
  SetCourses = "SET_COURSES",
  GetAllCourses = "GET_ALL_COURSES",
}

type SetCourses = {
  type: ActionType.SetCourses;
  courses: Array<Course>;
};

type GetAllAction = {
  type: ActionType.GetAllCourses;
};

export type CourseActions = SetCourses | GetAllAction;
