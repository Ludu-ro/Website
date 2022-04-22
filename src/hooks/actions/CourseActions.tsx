import { Course } from "../../types/Course";

export enum CourseActionType {
  SetCourses = "SET_COURSES",
}

type SetCourses = {
  type: CourseActionType.SetCourses;
  courses: Array<Course>;
};

export type CourseActions = SetCourses;
