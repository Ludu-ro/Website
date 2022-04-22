import { Course } from "../../types/Course";

export enum ActionType {
  SetCourses = "SET_COURSES",
}

type SetCourses = {
  type: ActionType.SetCourses;
  courses: Array<Course>;
};

export type CourseActions = SetCourses;
