import { Course } from "../../types/Course";

export enum UserCourseActionType {
  SetCourses = "SET_COURSES",
}

type SetUserCourse = {
  type: UserCourseActionType.SetCourses;
  courses: Array<Course>;
};

export type UserCourseActions = SetUserCourse;
