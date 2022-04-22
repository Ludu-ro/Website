import { getCourses } from "../../clients";
import { Course } from "../../types/Course";
import { ActionType, CourseActions } from "../actions/CourseActions";
import { CourseMap, CourseState } from "../CourseContext";

const courseArrayToCourseMap = (courses: Array<Course>): CourseMap => {
  const courseMap: CourseMap = {};
  courses.forEach((course) => {
    const { tags } = course;
    tags?.forEach((tag) => {
      if (!courseMap[tag]) {
        courseMap[tag] = [];
      }
      courseMap[tag].push(course);
    });
  });
  return courseMap;
};

export const courseReducer = (
  state: CourseState,
  action: CourseActions
): CourseState => {
  switch (action.type) {
    // used when provided with a new list of courses
    case ActionType.SetCourses: {
      const { courses } = action;
      return {
        ...state,
        courses: { ...courseArrayToCourseMap(courses) },
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
