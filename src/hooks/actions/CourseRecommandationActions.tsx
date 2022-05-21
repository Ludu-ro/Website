import { Course } from "../../types/Course";

export enum CourseRecommandationActionType {
  SetCourses = "SET_COURSES",
}

type SetCourseRecommandation = {
  type: CourseRecommandationActionType.SetCourses;
  courses: Array<Course>;
};

export type CourseRecommandationActions = SetCourseRecommandation;
