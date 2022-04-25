import { Course } from "../../types/Course";

export enum CourseDetailsActionType {
  SetCourseDetails = "SET_COURSE_DETAILS",
}

type SetCourseDetails = {
  type: CourseDetailsActionType.SetCourseDetails;
  courseDetails: Course;
};

export type CourseDetailsActions = SetCourseDetails;
